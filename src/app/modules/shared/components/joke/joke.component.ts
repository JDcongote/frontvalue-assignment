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
  joke!: Joke |undefined;

  loading: any;

  constructor(private favoriteService: FavoriteEditService) {}

  ngOnInit(){
    this.loading = !this.joke;
  }

  protected onToggleFavorite(joke: Joke | undefined): void {
    joke && this.favoriteService.toggleFavorite(joke)
  }
}
