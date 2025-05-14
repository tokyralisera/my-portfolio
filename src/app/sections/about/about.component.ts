import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  technologies = [
    { name: 'Angular', logo: 'assets/images/tech/angular.svg' },
    { name: 'Vue.js', logo: 'assets/images/tech/vuejs.svg' },
    { name: 'Express.js', logo: 'assets/images/tech/expressjs.svg' },
    { name: 'Symfony', logo: 'assets/images/tech/symfony.svg' },
    { name: 'NestJS', logo: 'assets/images/tech/nestjs.svg' },
    { name: 'Django', logo: 'assets/images/tech/django.svg' },
    { name: 'Flask', logo: 'assets/images/tech/flask.svg' },
    { name: 'MySQL', logo: 'assets/images/tech/mysql.svg' },
    { name: 'PostgreSQL', logo: 'assets/images/tech/postgresql.svg' },
    { name: 'MongoDB', logo: 'assets/images/tech/mongodb.svg' }
  ];
  
  currentSlide = 0;
  
  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.technologies.length - 1 : this.currentSlide - 1;
  }
  
  nextSlide() {
    this.currentSlide = this.currentSlide === this.technologies.length - 1 ? 0 : this.currentSlide + 1;
  }
}
