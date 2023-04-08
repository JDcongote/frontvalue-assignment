import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input()
  outlined = false;

  @Input()
  button = false;

  @Input()
  size: 'small' | 'medium' | 'big' = 'medium';
}
