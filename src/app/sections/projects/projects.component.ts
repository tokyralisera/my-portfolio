import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'E-commerce App',
      description: 'Application de commerce électronique complète avec gestion des produits, panier et paiement.',
      image: 'assets/images/project1.jpg',
      technologies: ['Angular', 'Node.js', 'MongoDB'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      title: 'Réseau Social',
      description: 'Plateforme de réseau social avec profils utilisateurs, posts et messagerie en temps réel.',
      image: 'assets/images/project2.jpg',
      technologies: ['React', 'Express', 'Socket.io'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      title: 'Application Météo',
      description: 'Application de prévisions météorologiques avec géolocalisation et graphiques interactifs.',
      image: 'assets/images/project3.jpg',
      technologies: ['Vue.js', 'API REST', 'Chart.js'],
      demoLink: '#',
      codeLink: '#'
    }
  ];
}
