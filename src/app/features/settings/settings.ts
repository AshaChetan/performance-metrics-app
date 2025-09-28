import { Component } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';
import { PerformanceService } from '../../core/services/performance.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: false,
  templateUrl: './settings.html',
  styleUrl: './settings.scss'
})
export class Settings {
constructor(
  public theme: ThemeService, 
  private fb: FormBuilder) {}

  toggleTheme() {
    this.theme.toggleTheme();
  }
}
