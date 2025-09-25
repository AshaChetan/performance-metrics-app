import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ChartWidget } from './shared/chart-widget/chart-widget';
import { EmployeeForm } from './shared/employee-form/employee-form';
import { EmployeeCard } from './shared/employee-card/employee-card';

@NgModule({
  declarations: [
    App,
    ChartWidget,
    EmployeeForm,
    EmployeeCard
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
