import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class ThemeService {
	private darkTheme: boolean;

	constructor() {
		this.darkTheme = localStorage.getItem('darkTheme') === 'true';
		this.setTheme();
	}

	toggleTheme() {
		this.darkTheme = !this.darkTheme;
		localStorage.setItem('darkTheme', this.darkTheme.toString());
		this.setTheme();
	}

	setTheme() {
		const theme = this.darkTheme ? 'dark-theme' : 'light-theme';
		document.body.className = theme;
	}

	isDarkTheme(): boolean {
		return this.darkTheme;
	}
}
