import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing-module';
import { Reports } from './reports';
import { ChartWidget } from '../../shared/chart-widget/chart-widget';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Reports
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReportsRoutingModule,
    ChartWidget
  ]
})
export class ReportsModule { }
