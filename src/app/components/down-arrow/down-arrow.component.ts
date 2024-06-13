import { Component, Input, HostListener } from '@angular/core';

import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-down-arrow',
  templateUrl: './down-arrow.component.html',
  styleUrl: './down-arrow.component.scss'
})
export class DownArrowComponent {
  @Input() link: string = '';

  faAngleDoubleDown = faAngleDoubleDown;

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
