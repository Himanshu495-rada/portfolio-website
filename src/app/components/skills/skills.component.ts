import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  images = [
    {
      src: '../../../assets/java.svg',
      alt: 'java logo',
      title: 'JAVA',
    },
    {
      src: '../../../assets/javascript.png',
      alt: 'javascript logo',
      title: 'JAVASCRIPT',
    },
    {
      src: '../../../assets/typescript.png',
      alt: 'typescript logo',
      title: 'TYPESCRIPT',
    },
    {
      src: '../../../assets/python.svg',
      alt: 'python logo',
      title: 'PYTHON',
    },
    {
      src: '../../../assets/mongodb.png',
      alt: 'mongodb logo',
      title: 'MONGO DB',
    },
    {
      src: '../../../assets/postgresql.png',
      alt: 'postgresql logo',
      title: 'POSTGRE SQL',
    },
    {
      src: '../../../assets/expressjs.png',
      alt: 'expressjs logo',
      title: 'EXPRESS JS',
    },
    {
      src: '../../../assets/docker.png',
      alt: 'docker logo',
      title: 'DOCKER',
    },
    {
      src: '../../../assets/reactjs.png',
      alt: 'reactjs logo',
      title: 'REACT JS',
    },
    {
      src: '../../../assets/reactnative.png',
      alt: 'reactnative logo',
      title: 'REACT NATIVE',
    },
    {
      src: '../../../assets/angular.svg',
      alt: 'angluarjs logo',
      title: 'ANGULAR JS',
    },
    {
      src: '../../../assets/redux.png',
      alt: 'redux logo',
      title: 'REDUX',
    },
    {
      src: '../../../assets/git.png',
      alt: 'git logo',
      title: 'GIT',
    },
    {
      src: '../../../assets/apache-kafka.svg',
      alt: 'apachekafka logo',
      title: 'APACHE KAFKA',
    },
  ];
}
