import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCard } from './employee-card';

describe('EmployeeCard', () => {
  let component: EmployeeCard;
  let fixture: ComponentFixture<EmployeeCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
