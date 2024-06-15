import { Component } from '@angular/core';

import { faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.scss'
})
export class CurriculumComponent {

  faDownload = faDownload;
}
