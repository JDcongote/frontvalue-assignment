import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Joke } from 'src/app/typings';
import { ToasterService } from './toaster.service';

@Injectable({
  providedIn: 'root',
})
export class FavoriteEditService {
  private favoritesList$: BehaviorSubject<Joke[]> = new BehaviorSubject<Joke[]>(
    []
  );

  constructor(private toasterService: ToasterService) {
    this.favoritesList$.next(this.getFromStorage());
  }

  public getFavoritesList$(): import('rxjs').Observable<Joke[]> {
    return this.favoritesList$.asObservable();
  }

  /**
   * If this joke is a favorite remove it from the list, else add it
   * @param joke 
   */
  public toggleFavorite(joke: Joke): void {
    const list = [...this.favoritesList$.getValue()];
    if (list?.length < 10) {
      joke.isFavorite = !joke.isFavorite;
      if (joke.isFavorite) {
        this.favoritesList$.next([...list, joke]);
      } else {
        // remove favorite
        const idx = list.findIndex((fav: Joke) => joke.id === fav.id);
        list.splice(idx, 1);
        this.favoritesList$.next(list);
      }
    } else {
      this.toasterService.showToast(
        'error',
        `You already have 10 favorites, can't add more.`
      );
    }

    this.saveInStorage();
  }

  private getFromStorage(): Joke[] {
    const favorites = localStorage.getItem('chuckNorrisFavorites');
    return favorites ? JSON.parse(favorites) : [];
  }

  private saveInStorage(): void {
    localStorage.setItem(
      'chuckNorrisFavorites',
      JSON.stringify(this.favoritesList$.getValue())
    );
  }
}
