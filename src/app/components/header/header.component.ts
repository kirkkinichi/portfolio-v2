import { Component, HostListener } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentSection: string = '';

  constructor(private scrollService: ScrollService) { }

  scrollToTop() {
    this.scrollService.scrollToTop();
    this.currentSection = 'home';  // Atualize o estado apenas quando clicar em 'Home'
  }

  scrollToSection(sectionId: string) {
    this.scrollService.scrollToElement(sectionId);
    this.currentSection = sectionId;  // Atualize o estado ao navegar para outras seções
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['home', 'about-me', 'skills', 'projects', 'contact'];
    let visibleSection = '';

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {  // 50 é um valor de margem superior para ajustar a ativação
          visibleSection = section;
          break;
        }
      }
    }

    this.currentSection = visibleSection;
  }
}
