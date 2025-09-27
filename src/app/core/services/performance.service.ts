import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import type { Employee } from '../models/employee.model';
import type { ChartConfiguration } from 'chart.js';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PerformanceService {
  private readonly _employees$ = new BehaviorSubject<Employee[]>([]);
  readonly employees$: Observable<Employee[]> = this._employees$.asObservable();

  //converting observable into signal
  readonly employeesSignal = toSignal(this.employees$, { initialValue: [] as Employee[] });

  loadMockData() {
    const mock: Employee[] = [
      { id: '1', name: 'John', role: 'Developer', score: 85 },
      { id: '2', name: 'James', role: 'Designer', score: 70 },
      { id: '3', name: 'Barbie', role: 'QA', score: 90 }
    ];
    this._employees$.next(mock);
  }

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
  addEmployee(emp: Employee) {
    const currentEmp = this._employees$.getValue();
    this._employees$.next([...currentEmp, emp]);
  }
}
