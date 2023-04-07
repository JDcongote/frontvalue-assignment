import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { IconComponent } from './components/icon/icon.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    IconComponent,
    ProgressBarComponent,
    ConfirmationDialogComponent,
  ],
  imports: [CommonModule, MatIconModule, MatDialogModule, MatButtonModule],
  exports: [IconComponent, ProgressBarComponent, MatButtonModule],
  bootstrap: [IconComponent],
})
export class SharedModule {}
