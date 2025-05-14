import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navLinks = [
    { title: 'Accueil', path: '#home' },
    { title: 'À propos', path: '#about' },
    { title: 'Projets', path: '#projects' },
    { title: 'Contact', path: '#contact' },
  ];
}
