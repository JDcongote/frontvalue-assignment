import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FavoriteEditService } from 'src/app/modules/shared/services/favorite-edit.service';
import { Joke } from 'src/app/typings';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss']
})
export class FavoriteListComponent {
  protected jokesList$!: Observable<Joke[]>;
  protected jokesLoading$!: Observable<boolean>;
  
  constructor(private favoriteService: FavoriteEditService){}

  ngOnInit(){
    this.jokesList$ = this.favoriteService.getFavoritesList$();
  }
}
