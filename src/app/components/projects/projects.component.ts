import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Angular and TypeScript. Features a clean design, smooth animations, and a contact form.',
      image: 'assets/images/portfolio.jpg',
      technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration.',
      image: 'assets/images/ecommerce.jpg',
      technologies: ['Angular', 'Node.js', 'Firebase', 'Stripe'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, task assignments, and progress tracking.',
      image: 'assets/images/taskmanager.jpg',
      technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A weather dashboard that displays current weather conditions and forecasts using the OpenWeatherMap API.',
      image: 'assets/images/weather.jpg',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Weather API'],
      liveLink: '#',
      githubLink: '#'
    }
  ];

  getImageUrl(imagePath: string): string {
    return imagePath || 'assets/images/default-project.jpg';
  }
} 