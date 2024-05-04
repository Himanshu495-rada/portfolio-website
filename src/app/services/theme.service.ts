import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkTheme = new BehaviorSubject<string>('light-theme');
  isDarkTheme$ = this.isDarkTheme.asObservable();

  toggleTheme() {
    console.log('theme changed');
    this.isDarkTheme.next(
      this.isDarkTheme.getValue() == 'light-theme'
        ? 'dark-theme'
        : 'light-theme'
    );
  }
}
