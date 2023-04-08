import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { IconComponent } from './components/icon/icon.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { JokeComponent } from './components/joke/joke.component';
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  declarations: [
    IconComponent,
    ProgressBarComponent,
    ConfirmationDialogComponent,
    JokeComponent,
    ToastComponent
  ],
  imports: [CommonModule, MatIconModule, MatDialogModule, MatButtonModule],
  exports: [IconComponent, ProgressBarComponent, MatButtonModule, JokeComponent, ToastComponent],
  bootstrap: [IconComponent, JokeComponent],
})
export class SharedModule {}
