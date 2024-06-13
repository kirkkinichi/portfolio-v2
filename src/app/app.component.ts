import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

	title = 'portfolio'

	constructor(private router: Router, private route: ActivatedRoute) { }

	ngOnInit() {
		this.route.fragment.subscribe(fragment => {
			if (fragment) {
				this.scrollToSection(fragment);
			}
		});
	}

	scrollToSection(sectionId: string) {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
}
