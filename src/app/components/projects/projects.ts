import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my skills and projects.',
      imageUrl: 'assets/images/portfolio.png',
      link: ''
    },
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce application with user authentication and product management.',
      imageUrl: 'assets/images/ecommerce.png',
      link: ''
    }
  ]
}
