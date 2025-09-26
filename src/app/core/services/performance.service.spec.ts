import { TestBed } from '@angular/core/testing';

import { PerformanceService } from './performance.service';

describe('Performance', () => {
  let service: PerformanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerformanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
