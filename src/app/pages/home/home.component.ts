import { Component } from '@angular/core';

import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  faAngleDoubleDown = faAngleDoubleDown;
}
