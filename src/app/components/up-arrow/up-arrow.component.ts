import { Component } from '@angular/core';

import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-up-arrow',
  templateUrl: './up-arrow.component.html',
  styleUrl: './up-arrow.component.scss'
})
export class UpArrowComponent {

  faArrowUp = faArrowUp;

  currentSection: string = '';

	constructor(private scrollService: ScrollService) { }

	scrollToTop() {
		this.scrollService.scrollToTop();
		this.currentSection = 'home';
	}
}
