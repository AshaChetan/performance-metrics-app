import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import type { Employee } from '../models/employee.model';
import type { ChartConfiguration } from 'chart.js';
import { catchError, delay, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PerformanceService {
  private readonly _employees$ = new BehaviorSubject<Employee[]>([]);
  readonly employees$: Observable<Employee[]> = this._employees$.asObservable();

  // converting observable into signal
  readonly employeesSignal = toSignal(this.employees$, { initialValue: [] as Employee[] });

  constructor() {
    this.loadMockData();
  }

  /** Simulated API call to fetch employees */
  getEmployees(): Observable<Employee[]> {
    return of(this._employees$.value).pipe(
      delay(500), // simulate network delay
      tap(data => this._employees$.next(data)), // update BehaviorSubject automatically
      catchError(err => {
        console.error('Error fetching employees', err);
        return of([]);
      })
    );
  }

  /** Add new employee */
  addEmployee(emp: Employee) {
    const currentEmp = this._employees$.getValue();
    this._employees$.next([...currentEmp, emp]);
  }

  /** Calculate chart data */
  getChartDataForEmployees(employees: Employee[]): ChartConfiguration<'bar'>['data'] {
    const labels = employees.map(e => e.name);
    const data = employees.map(e => e.score);
    return {
      labels,
      datasets: [
        {
          label: 'Performance Score',
          data
        }
      ]
    };
  }

  /** Aggregated scores by role */
  averageScoreByRole() {
    return this.employees$.pipe(
      map(list => {
        const roleSummary: { [role: string]: { sum: number; count: number } } = {};
        list.forEach(e => {
          if (!roleSummary[e.role]) roleSummary[e.role] = { sum: 0, count: 0 };
          roleSummary[e.role].sum += e.score;
          roleSummary[e.role].count += 1;
        });
        return Object.entries(roleSummary).map(([role, { sum, count }]) => ({
          role,
          average: count ? sum / count : 0,
          count
        }));
      }),
      catchError(err => {
        console.error('Error in averageScoreByRole:', err);
        return of([]);
      })
    );
  }

  /** Load initial mock data */
  private loadMockData() {
    const mockData : Employee[] = [
      { name: 'John', role: 'Developer', score: 85 },
      { name: 'James', role: 'Designer', score: 70 },
      { name: 'Barbie', role: 'QA', score: 90 },
      { name: 'Asha', role: 'Developer', score: 80 }
    ];
    this._employees$.next(mockData);
  }
}
