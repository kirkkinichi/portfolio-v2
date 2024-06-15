import { Component } from '@angular/core';

import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-up-arrow',
  templateUrl: './up-arrow.component.html',
  styleUrl: './up-arrow.component.scss'
})
export class UpArrowComponent {

  faArrowUp = faArrowUp;
}
