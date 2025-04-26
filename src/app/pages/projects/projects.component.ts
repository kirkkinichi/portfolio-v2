import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface Project {
	title: string;
	description: string;
	tools: string;
	imageUrl: string;
	githubUrl: string;
	category: string;
}


@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

	projects: Project[] = [
		{
			title: 'Kirk and Morty',
			tools: 'Angular, Bootstrap, Docker, Font Awesome, HTML, Node.js, SCSS, TypeScript.',
			description: 'Kirk and Morty is a single-page application that uses Angular framework and The Rick and Morty API to list and detail the Characters, Episodes, and Locations featured in the series.',
			imageUrl: 'assets/img/kirk-and-morty-project.png',
			githubUrl: 'https://github.com/kirkkinichi/rick-morty-project',
			category: 'Angular, Bootstrap, Docker, Font Awesome, HTML, Node.js, SCSS, TypeScript'
		},
		{
			title: 'Sistema de Gestão',
			tools: 'PHP, Laravel, Laravel Sail, Docker, MySQL, Tailwind CSS, Ubuntu WSL',
			description: '',
			imageUrl: 'assets/img/sistema-gestao-project.png',
			githubUrl: 'https://github.com/kirkkinichi/sistema-gestao',
			category: 'PHP, Laravel, Laravel Sail, Docker, MySQL, Tailwind CSS, Ubuntu WSL'
		},
		{
			title: 'Products Management',
			tools: 'NestJS, SQLite, Angular, Node.js, Docker, Bootstrap',
			description: '',
			imageUrl: 'assets/img/products-management-project.png',
			githubUrl: 'https://github.com/kirkkinichi/products-management',
			category: 'NestJS, SQLite, Angular, Node.js, Docker, Bootstrap'
		},
		{
			title: 'Minesweeper Java',
			tools: 'Java',
			description: 'Minesweeper Game Project, developed in Java during the course: Java 2022 COMPLETO: Do Zero ao Profissional + Projetos! - Instructed by: Leonardo Moura Leitao and Cod3r Cursos Online, through the Udemy platform.',
			imageUrl: 'assets/img/minesweeper-java-project.png',
			githubUrl: 'https://github.com/kirkkinichi/minesweeper-java',
			category: 'Java'
		},
		{
			title: 'Portfolio',
			tools: 'Angular, Bootstrap, HTML, SCSS, TypeScript.',
			description: '',
			imageUrl: 'assets/img/portfolio-project.png',
			githubUrl: 'https://github.com/kirkkinichi/portfolio-v2',
			category: 'Angular'
		}
	];


	filteredProjects: Project[] = [];
	filterIsActive: string[] = [];
	showAdvice = '';

	constructor(private translate: TranslateService) {
		this.filteredProjects = this.projects;
		translate.setDefaultLang('en');
	}

	translateProjectDescription(project: Project): string {
		return this.translate.instant(`PROJECT_DESCRIPTION_${project.title.toUpperCase().replace(/ /g, '_')}`);
	}

	// Display '+' in advice
	formatActiveFilters(filtros: string[]): string {
		return filtros.join(' + ');
	}

	// Filter project based on its category
	filterProjects(filter: string) {
		const index = this.filterIsActive.indexOf(filter);
		if (index > -1) {
			this.filterIsActive.splice(index, 1);
		} else {
			this.filterIsActive.push(filter);
		}

		if (this.filterIsActive.length === 0) {
			this.filteredProjects = this.projects;
		} else {
			this.filteredProjects = this.projects.filter(projeto =>
				this.filterIsActive.every(filtroAtivo =>
					projeto.category.toLowerCase().includes(filtroAtivo.toLowerCase())
				)
			);
		}

		this.showAdvice = this.filterIsActive.length === 0 ? '' : this.formatActiveFilters(this.filterIsActive);
	}

	// Open link in a new tab
	openLink(url: string): void {
		window.open(url, '_blank');
	}

	// Verify if filter is active
	isFilterActive(filter: string): boolean {
		return this.filterIsActive.includes(filter);
	}
}
