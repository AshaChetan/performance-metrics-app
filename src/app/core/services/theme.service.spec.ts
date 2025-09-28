import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
    document.body.className = '';
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have initial dark mode as false', () => {
    expect(service.isDarkMode()).toBeFalse();
  });

  it('toggleTheme should toggle dark mode signal', () => {
    expect(service.isDarkMode()).toBeFalse();
    service.toggleTheme();
    expect(service.isDarkMode()).toBeTrue();
    service.toggleTheme();
    expect(service.isDarkMode()).toBeFalse();
  });

  it('toggleTheme should toggle dark-theme class on body', () => {
    service.toggleTheme();
    expect(document.body.classList.contains('dark-theme')).toBeTrue();
    service.toggleTheme();
    expect(document.body.classList.contains('dark-theme')).toBeFalse();
  });

  it('setDark(true) should set dark mode and add class', () => {
    service.setDark(true);
    expect(service.isDarkMode()).toBeTrue();
    expect(document.body.classList.contains('dark-theme')).toBeTrue();
  });

  it('setDark(false) should unset dark mode and remove class', () => {
    service.setDark(true); // first set true
    service.setDark(false);
    expect(service.isDarkMode()).toBeFalse();
    expect(document.body.classList.contains('dark-theme')).toBeFalse();
  });
  
});
