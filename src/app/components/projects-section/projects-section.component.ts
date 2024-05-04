import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.css'],
})
export class ProjectsSectionComponent {
  projects = [
    {
      image: '../../../assets/project.png',
      title: 'Project 1',
      description: 'A brief description of Project 1.',
    },
    {
      image: '../../../assets/project.png',
      title: 'Project 2',
      description: 'A brief description of Project 2.',
    },
    {
      image: '../../../assets/project.png',
      title: 'Project 3',
      description: 'A brief description of Project 3.',
    },
    {
      image: '../../../assets/project.png',
      title: 'Project 4',
      description: 'A brief description of Project 4.',
    },
  ];
}
