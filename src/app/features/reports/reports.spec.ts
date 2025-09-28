import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reports } from './reports';
import { ChartWidget } from '../../shared/chart-widget/chart-widget';

describe('Reports', () => {
  let component: Reports;
  let fixture: ComponentFixture<Reports>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Reports],
      imports: [ChartWidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reports);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
