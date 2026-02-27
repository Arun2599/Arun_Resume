import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkModeSubject = new BehaviorSubject<boolean>(this.getInitialTheme());
  public darkMode$ = this.darkModeSubject.asObservable();

  constructor() {
    // Apply initial theme
    this.applyTheme(this.darkModeSubject.value);
  }

  private getInitialTheme(): boolean {
    // Check localStorage first
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme !== null) {
      return savedTheme === 'true';
    }
    // Default to dark mode
    return true;
  }

  toggleTheme() {
    const newValue = !this.darkModeSubject.value;
    this.darkModeSubject.next(newValue);
    localStorage.setItem('darkMode', String(newValue));
    this.applyTheme(newValue);
  }

  private applyTheme(isDark: boolean) {
    if (isDark) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

  isDarkMode(): boolean {
    return this.darkModeSubject.value;
  }
}
