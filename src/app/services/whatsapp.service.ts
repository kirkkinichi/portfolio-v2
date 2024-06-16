import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class WhatsappService {

	constructor() { }

	openWhatsApp(phoneNumber: string, message: string) {
		const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
		window.open(url, '_blank');
	}
}
