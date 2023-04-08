import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeListComponent } from './components/joke-list/joke-list.component';
import { JokesRoutingModule } from './jokes-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    JokeListComponent,
  ],
  imports: [
    CommonModule,
    JokesRoutingModule,
    HttpClientModule,
    SharedModule
  ]
})
export class JokesModule { }
