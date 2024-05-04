import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-image-container',
  templateUrl: './skill-image-container.component.html',
  styleUrls: ['./skill-image-container.component.css'],
})
export class SkillImageContainerComponent {
  @Input() image: string = '';
  @Input() alt: string = '';
  @Input() title: string = '';
}
