import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrl: './parallax.component.scss'
})
export class ParallaxComponent {

  @Input() backgroundImage: string = '';
}
