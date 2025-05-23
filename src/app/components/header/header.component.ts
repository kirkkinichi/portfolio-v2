import { Component, HostListener } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from '../../services/theme.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	currentSection: string = '';
	currentLanguage: string = 'en';
	isDarkTheme: boolean;

	constructor(
		private scrollService: ScrollService,
		private translate: TranslateService,
		private themeService: ThemeService
	) {
		this.isDarkTheme = this.themeService.isDarkTheme();
		translate.setDefaultLang('en');
		translate.use('en');
	}

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
		const sections = ['about-me', 'skills', 'projects', 'curriculum'];
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

	setLanguage(language: string) {
		this.currentLanguage = language;
		this.translate.use(language);
	}

	toggleTheme() {
		this.themeService.toggleTheme();
		this.isDarkTheme = this.themeService.isDarkTheme();
	}
}
