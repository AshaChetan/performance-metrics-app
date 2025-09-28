import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeForm } from './employee-form';
import { Employee } from '../../core/models/employee.model';

describe('EmployeeForm', () => {
  let component: EmployeeForm;
  let fixture: ComponentFixture<EmployeeForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form with 3 controls', () => {
    expect(component.employeeForm.contains('name')).toBeTruthy();
    expect(component.employeeForm.contains('role')).toBeTruthy();
    expect(component.employeeForm.contains('score')).toBeTruthy();
  });

  it('should make name and role required', () => {
    const nameControl = component.employeeForm.get('name');
    const roleControl = component.employeeForm.get('role');
    nameControl?.setValue('');
    roleControl?.setValue('');
    expect(nameControl?.valid).toBeFalse();
    expect(roleControl?.valid).toBeFalse();
  });

  it('should validate score between 0 and 100', () => {
    const scoreControl = component.employeeForm.get('score');
    scoreControl?.setValue(-5);
    expect(scoreControl?.valid).toBeFalse();
    scoreControl?.setValue(150);
    expect(scoreControl?.valid).toBeFalse();
    scoreControl?.setValue(50);
    expect(scoreControl?.valid).toBeTrue();
  });

  it('should emit formSubmit event when form is valid', () => {
    spyOn(component.formSubmit, 'emit');

    component.employeeForm.setValue({ name: 'Test', role: 'Dev', score: 80 });
    component.submit();

    expect(component.formSubmit.emit).toHaveBeenCalledWith({ name: 'Test', role: 'Dev', score: 80 } as Employee);
  });

  it('should not emit event if form is invalid', () => {
    spyOn(component.formSubmit, 'emit');

    component.employeeForm.setValue({ name: '', role: '', score: 50 });
    component.submit();

    expect(component.formSubmit.emit).not.toHaveBeenCalled();
  });
});
