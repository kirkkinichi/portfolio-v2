import { Component, Input } from '@angular/core';

import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-down-arrow',
  templateUrl: './down-arrow.component.html',
  styleUrl: './down-arrow.component.scss'
})
export class DownArrowComponent {
  @Input() link: string = '';

  faAngleDoubleDown = faAngleDoubleDown;
}
