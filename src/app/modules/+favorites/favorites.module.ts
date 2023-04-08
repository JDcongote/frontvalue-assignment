import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FavoriteListComponent } from './components/favorite-list/favorite-list.component';
import { FavoritesRoutingModule } from './favorites-routing.module';



@NgModule({
  declarations: [FavoriteListComponent],
  imports: [
    FavoritesRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class FavoritesModule { }
