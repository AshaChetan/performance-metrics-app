import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing-module';
import { Dashboard } from './dashboard';
import { ChartWidget } from '../../shared/chart-widget/chart-widget';
import { EmployeeForm } from '../../shared/employee-form/employee-form';
import { EmployeeCard } from '../../shared/employee-card/employee-card';

@NgModule({
  declarations: [
    Dashboard
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartWidget,
    EmployeeForm
  ]
})
export class DashboardModule { }
