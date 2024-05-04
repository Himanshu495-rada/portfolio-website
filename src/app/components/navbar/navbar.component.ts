import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isDarkTheme = this.themeService.isDarkTheme$;
  constructor(private themeService: ThemeService) {}
  toggleTheme() {
    this.themeService.toggleTheme();
    this.isDarkTheme.subscribe((isDarkTheme) => {
      // Subscribe to observable
      document.body.className =
        isDarkTheme == 'dark-theme' ? 'dark-theme' : 'light-theme'; // Set class based on theme
    });
  }
}
