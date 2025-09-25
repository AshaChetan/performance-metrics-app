import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartWidget } from './chart-widget';

describe('ChartWidget', () => {
  let component: ChartWidget;
  let fixture: ComponentFixture<ChartWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartWidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
