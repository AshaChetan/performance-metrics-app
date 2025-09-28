import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.scss'
})
export class EmployeeForm {

  employeeForm : FormGroup;

  @Output() formSubmit = new EventEmitter<{
    name:string;
    role:string;
    score:number;
  }>();

  constructor(private fb: FormBuilder) {
      this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      role: ['', Validators.required],
      score: [null, [Validators.required, Validators.min(0), Validators.max(100)]]
    });
  }
  
  submit() {
    if (this.employeeForm.valid) {
      this.formSubmit.emit(this.employeeForm.value);
      this.employeeForm.reset();
    } else {
      this.employeeForm.markAllAsTouched();
    }
  }
}
