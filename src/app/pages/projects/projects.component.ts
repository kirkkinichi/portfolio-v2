import { Component } from '@angular/core';

interface Project {
	title: string;
	description: string;
	tools: string;
	imageUrl: string;
	githubUrl: string;
	liveUrl: string;
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
			title: 'Project 1',
			tools: '',
			description: 'Project Java',
			imageUrl: 'assets/img/project-img_kirk_and_morty.png',
			githubUrl: '',
			liveUrl: '',
			category: 'Java'
		},
		{
			title: 'Project 2',
			tools: '',
			description: 'Project Java e Angular',
			imageUrl: '',
			githubUrl: '',
			liveUrl: '',
			category: 'Angular, Java'
		},
		{
			title: 'Kirk and Morty',
			tools: 'Angular CLI, Node.js, Docker, Bootstrap, Font Awesome.',
			description: 'Kirk and Morty is a single-page application that uses Angular framework and The Rick and Morty API to list and detail the Characters, Episodes, and Locations featured in the series.',
			imageUrl: 'assets/img/project-img_kirk_and_morty.png',
			githubUrl: 'https://github.com/kirkkinichi/rick-morty-project',
			liveUrl: 'https://kirk-and-morty.kirksilva.com/',
			category: 'Angular'
		},
		{
			title: 'Project 4',
			tools: '', 
			description: 'Project HTML', 
			imageUrl: '', 
			githubUrl: '',
			liveUrl: '',
			category: 'HTML'
		}
	];


	filteredProjects: Project[] = [];
	filterIsActive: string[] = [];
	showAdvice = '';

	constructor() {
		this.filteredProjects = this.projects;
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
