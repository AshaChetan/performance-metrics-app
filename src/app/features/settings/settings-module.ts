import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing-module';
import { Settings } from './settings';
import { EmployeeForm } from '../../shared/employee-form/employee-form';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Settings
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    EmployeeForm,
    ReactiveFormsModule
  ]
})
export class SettingsModule { }
