import { Component, HostListener } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currentSection: string = '';

  constructor(private scrollService: ScrollService) { }

  scrollToTop() {
    this.scrollService.scrollToTop();
    this.currentSection = 'home';
  }

  scrollToSection(sectionId: string) {
    this.scrollService.scrollToElement(sectionId);
    this.currentSection = sectionId;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['about-me', 'skills', 'projects', 'contact'];
    let visibleSection = '';

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
          visibleSection = section;
          break;
        }
      }
    }

    this.currentSection = visibleSection;
  }
}
