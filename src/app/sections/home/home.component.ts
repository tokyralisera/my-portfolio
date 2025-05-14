import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  name = 'Hery Toky Sylvio Ralisera';
  title = 'Développeur Web Fullstack';

  downloadMyCV() {
    const link = document.createElement('a');
    link.href = '/CV RALISERA Hery Toky Sylvio.pdf';
    link.download = 'CV RALISERA Hery Toky Sylvio.pdf';
    link.click();
  }
}
