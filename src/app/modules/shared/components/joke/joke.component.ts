import { Component, Input } from '@angular/core';
import { Joke } from 'src/app/typings';
import { FavoriteEditService } from '../../services/favorite-edit.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent {
  @Input()
  joke!: Joke;

  constructor(private favoriteService: FavoriteEditService){}

  protected onToggleFavorite(joke: Joke): void {
    this.favoriteService.toggleFavorite(joke)
  }
}
