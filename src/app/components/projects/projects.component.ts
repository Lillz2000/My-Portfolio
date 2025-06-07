import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
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
      id: 'portfolio',
      title: 'Personal Portfolio Website',
      description: 'A modern portfolio website built with Angular and TypeScript, showcasing my skills and projects. Features a responsive design, smooth animations, and a clean user interface.',
      technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'Git'],
      githubLink: 'https://github.com/Lillz2000/My-Portfolio'
    },
    {
      id: 'infs',
      title: 'INFS-202 Project 2023',
      description: 'A collaborative university project focused on information systems. Contributed to developing a database management system, implementing data models, and creating user interfaces.',
      technologies: ['Database Management', 'SQL', 'System Analysis', 'Team Collaboration'],
      githubLink: 'https://github.com/Onkgopotse007/INFS-202-Project-2023'
    }
  ];

  getProjectIcon(projectId: string): string {
    switch (projectId) {
      case 'portfolio':
        return 'fas fa-laptop-code fa-3x';
      case 'infs':
        return 'fas fa-database fa-3x';
      default:
        return 'fas fa-code fa-3x';
    }
  }
} 