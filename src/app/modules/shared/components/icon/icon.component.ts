import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input()
  outlined: boolean = false;

  @Input()
  button: boolean = false;

  @Input()
  color: 'primary' | 'secondary' = 'primary';

  @Input()
  size: 'small' | 'medium' | 'big' = 'medium';

  constructor() {}
}
