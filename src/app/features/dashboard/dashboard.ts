import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { PerformanceService } from '../../core/services/performance.service';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { Employee } from '../../core/models/employee.model';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class Dashboard implements OnInit, OnDestroy{
  private perf = inject(PerformanceService)
  employeesSignal = this.perf.employeesSignal;
  chartData: ChartConfiguration<'bar'>['data'] | undefined;
  chartOptions: ChartConfiguration<'bar'>['options'] = { responsive: true };
  errorMsg = '';
  private destroy$ = new Subject<void>();

  constructor() {}

  ngOnInit() {
    // Load initial data
    this.perf.getEmployees()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (list) => {
          this.chartData = this.perf.getChartDataForEmployees(list);
          this.errorMsg = '';
      },
      error: (err) => {
          console.error('Error loading employees:', err);
          this.errorMsg = 'Failed to load employees. Please try again!';
        }
    })
    // Update chart when employees change
    this.perf.employees$
      .pipe(takeUntil(this.destroy$))
      .subscribe(list => {
        this.chartData = this.perf.getChartDataForEmployees(list);
      });
  }

  onAddEmployee(emp: Employee) {
    try {
      this.perf.addEmployee(emp);
      this.errorMsg = ''; // clear any previous errors
    } catch (err) {
      console.error('Error adding employee:', err);
      this.errorMsg = 'Could not add employee. Please try again!';
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
