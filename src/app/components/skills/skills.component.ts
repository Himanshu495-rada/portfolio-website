import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  images = [
    {
      src: '../../../assets/javascript.png',
      alt: 'Image 1',
      title: 'JAVASCRIPT',
    },
    {
      src: '../../../assets/typescript.png',
      alt: 'Image 2',
      title: 'TYPESCRIPT',
    },
    {
      src: '../../../assets/mongodb.png',
      alt: 'Image 3',
      title: 'MONGO DB',
    },
    {
      src: '../../../assets/postgresql.png',
      alt: 'Image 3',
      title: 'POSTGRE SQL',
    },
    {
      src: '../../../assets/expressjs.png',
      alt: 'Image 3',
      title: 'EXPRESS JS',
    },
    {
      src: '../../../assets/docker.png',
      alt: 'Image 3',
      title: 'DOCKER',
    },
    {
      src: '../../../assets/reactjs.png',
      alt: 'Image 3',
      title: 'REACT JS',
    },
    {
      src: '../../../assets/reactnative.png',
      alt: 'Image 3',
      title: 'REACT NATIVE',
    },
    {
      src: '../../../assets/redux.png',
      alt: 'Image 3',
      title: 'REDUX',
    },
    {
      src: '../../../assets/git.png',
      alt: 'Image 3',
      title: 'GIT',
    },
  ];
}
