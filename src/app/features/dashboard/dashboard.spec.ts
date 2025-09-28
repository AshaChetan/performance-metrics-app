import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboard } from './dashboard';
import { EmployeeForm } from '../../shared/employee-form/employee-form';
import { EmployeeCard } from '../../shared/employee-card/employee-card';
import { ChartWidget } from '../../shared/chart-widget/chart-widget';

describe('Dashboard', () => {
  let component: Dashboard;
  let fixture: ComponentFixture<Dashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dashboard],
      imports:[EmployeeForm, EmployeeCard, ChartWidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
