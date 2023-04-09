import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { IconComponent } from './components/icon/icon.component';
import { JokeComponent } from './components/joke/joke.component';
import { ToastComponent } from './components/toast/toast.component';
import { SkeletonLoaderComponent } from './components/skeleton-loader/skeleton-loader.component';

@NgModule({
  declarations: [
    IconComponent,
    JokeComponent,
    ToastComponent,
    SkeletonLoaderComponent
  ],
  imports: [CommonModule, MatIconModule, MatDialogModule, MatButtonModule],
  exports: [IconComponent, MatButtonModule, JokeComponent, ToastComponent],
  bootstrap: [IconComponent, JokeComponent],
})
export class SharedModule {}
