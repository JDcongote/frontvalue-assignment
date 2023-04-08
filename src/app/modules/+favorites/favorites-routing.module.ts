import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoriteListComponent } from './components/favorite-list/favorite-list.component';

const routes: Routes = [{ path: 'favorites', component: FavoriteListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritesRoutingModule {}
