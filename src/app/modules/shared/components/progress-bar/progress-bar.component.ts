import { Component } from '@angular/core';
import { ProgressBarService } from '../../services/progress-bar.service';
import { Observable } from 'rxjs';
import { ProgresBarModel } from '../../typings';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent {
  status$!: Observable<ProgresBarModel>;
  loading$!: Observable<boolean>;
  constructor(private progressBarService: ProgressBarService) {
    this.status$ = progressBarService.getStatus$();
    this.loading$ = progressBarService.getLoading$();
  }
}
