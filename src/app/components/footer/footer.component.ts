import { Component } from '@angular/core';

import { WhatsappService } from '../../services/whatsapp.service';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.scss',
})
export class FooterComponent {

	constructor(private whatsappService: WhatsappService) {}

	faGithub = faGithub;
	faEnvelope = faEnvelope;
	faLinkedin = faLinkedin;
	faWhatsapp = faWhatsapp;

	openWhatsApp() {
		const phoneNumber = '5515997503279';
		const message = '';
		this.whatsappService.openWhatsApp(phoneNumber, message);
	}
}
