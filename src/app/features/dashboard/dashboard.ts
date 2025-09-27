import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { PerformanceService } from '../../core/services/performance.service';
import { Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class Dashboard implements OnInit, OnDestroy{

  private destroy$ = new Subject<void>();
  
  chartData: ChartConfiguration<'bar'>['data'] = { labels: [], datasets: [] };
  chartOptions: ChartConfiguration<'bar'>['options'] = {
  responsive: true,
  maintainAspectRatio: false,
  };
  
  constructor(private perf: PerformanceService) {}

  ngOnInit() {
    // load initial mock data
    this.perf.loadMockData();

    // subscribe to employees$ to update chart whenever employees change
      this.perf.employees$.pipe(takeUntil(this.destroy$))
      .subscribe(list => {
        this.chartData = this.perf.getChartDataForEmployees(list);
      })
  }
   ngOnDestroy() {
     this.destroy$.next();
    this.destroy$.complete();
  }

}
