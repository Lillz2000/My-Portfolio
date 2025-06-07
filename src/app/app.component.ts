import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ScrollService } from './services/scroll.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule,
        HomeComponent,
        AboutComponent,
        SkillsComponent,
        ProjectsComponent,
        ContactComponent
    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [AppComponent]
})
export class AppComponent {
    private scrollService = inject(ScrollService);
    isMenuOpen: boolean = false;

    get activeSection(): string {
        return this.scrollService.getActiveSection();
    }

    @HostListener('window:scroll')
    onScroll(): void {
        this.scrollService.updateActiveSection();
    }

    scrollToSection(sectionId: string): void {
        this.scrollService.scrollToSection(sectionId);
        this.isMenuOpen = false;
    }

    toggleMenu(): void {
        this.isMenuOpen = !this.isMenuOpen;
    }
}