import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private viewportScroller: ViewportScroller) {}
  scrollToAbout() {
    this.viewportScroller.scrollToAnchor('about-anchor'); // Target element ID
  }
}
