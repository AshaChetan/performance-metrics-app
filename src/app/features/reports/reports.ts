import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PerformanceService } from '../../core/services/performance.service';
import { combineLatest, map, startWith } from 'rxjs';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-reports',
  standalone: false,
  templateUrl: './reports.html',
  styleUrl: './reports.scss'
})
export class Reports {
  filterForm!: FormGroup;
  private perf= inject( PerformanceService);

  // observable for chart data in Chart.js format
  chartData$ = combineLatest([
    this.perf.averageScoreByRole(),
  ]).pipe(map(([aggregates]) => this.toChartData(aggregates)));

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      role: [''],
      minScore: [0]
    });

    // update chartData$ to react to filters
    this.chartData$ = combineLatest([
      this.perf.averageScoreByRole(),
      this.filterForm.valueChanges.pipe(startWith(this.filterForm.value))
    ]).pipe(
      map(([aggregates, filter]) => {
        const filtered = aggregates.filter(item => {
          const roleMatch = filter.role ? item.role === filter.role : true;
          const scoreMatch = item.average >= filter.minScore;
          return roleMatch && scoreMatch;
        });
        return this.toChartData(filtered);
      })
    );
  }

  // helper to map raw aggregates → Chart.js data format
  private toChartData(aggregates: { 
    role: string; 
    average: number }[]): ChartConfiguration<'bar'>['data'] {
    if (!aggregates || aggregates.length === 0) {
      return {
        labels: [],
        datasets: [
          {
            label: 'Average Score',
            data: []
          }
        ]
      };
    }

    return {
      labels: aggregates.map(a => a.role),
      datasets: [
        {
          label: 'Average Score',
          data: aggregates.map(a => a.average),
          backgroundColor: '#42A5F5'
        }
      ]
    };
  }
}
