import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JokeListComponent } from './components/joke-list/joke-list.component';

const routes: Routes = [{ path: 'jokes', component: JokeListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JokesRoutingModule {}
