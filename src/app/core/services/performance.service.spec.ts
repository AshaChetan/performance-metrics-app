import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { PerformanceService } from './performance.service';
import { take } from 'rxjs/operators';
import { Employee } from '../models/employee.model';

describe('Performance', () => {
  let service: PerformanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerformanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should load initial mock data', (done) => {
    service.employees$.pipe(take(1)).subscribe(data => {
      expect(data.length).toBeGreaterThan(0);
      expect(data[0].name).toBe('John');
      done();
    });
  });
  it('should return employees and update BehaviorSubject', fakeAsync(() => {
    let result: Employee[] | undefined;
    service.getEmployees().pipe(take(1)).subscribe(res => {
      result = res;
    });

    tick(500); // simulate the delay
    expect(result).toBeDefined();
    expect(result?.length).toBeGreaterThan(0);
    // Verify BehaviorSubject updated
    expect(service.employeesSignal().length).toBeGreaterThan(0);
  }));

  it('should return empty array if error occurs', fakeAsync(() => {
    spyOn(service as any, '_employees$').and.throwError('Simulated Error');

    let result: Employee[] | undefined;

    service.getEmployees().pipe(take(1)).subscribe(res => {
      result = res;
    });

    tick(500);
    expect(result).toEqual([]); // fallback empty list
  }));

  it('should add a new employee', (done) => {
    const newEmp: Employee = { name: 'Test', role: 'QA', score: 50 };
    service.addEmployee(newEmp);

    service.employees$.pipe(take(1)).subscribe(list => {
      expect(list).toContain(newEmp);
      done();
    });
  });

  it('should compute average score by role', (done) => {
    service.averageScoreByRole().pipe(take(1)).subscribe(summary => {
      const dev = summary.find(s => s.role === 'Developer');
      expect(dev?.average).toBeGreaterThan(0);
      done();
    });
  });

  it('should handle errors gracefully in averageScoreByRole', (done) => {
    // simulate error by overriding employees$
    (service as any)._employees$.error('Simulated Error');

    service.averageScoreByRole().pipe(take(1)).subscribe(result => {
      expect(result).toEqual([]);
      done();
    });
  });

  it('employeesSignal should reflect updates', (done) => {
    const newEmp: Employee = { name: 'SignalTest', role: 'Dev', score: 90 };
    service.addEmployee(newEmp);

    const signalValue = service.employeesSignal();
    expect(signalValue.find(e => e.name === 'SignalTest')).toBeTruthy();
    done();
  });

});
