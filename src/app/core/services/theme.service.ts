import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkMode = signal(false);

  toggleTheme() {
    this.isDarkMode.update(v => !v);
    document.body.classList.toggle('dark-theme', this.isDarkMode());
  }

  setDark(dark: boolean) {
    this.isDarkMode.set(dark);
    document.body.classList.toggle('dark-theme', dark);
  }
}
