import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from '../constants';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Joke, JokeAPIResponse } from 'src/app/typings';
import {
  Observable,
  exhaustMap,
  filter,
  map,
  of,
  repeat,
  skip,
  take,
  timer,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JokesService {
  private jokesList$: BehaviorSubject<Joke[]> = new BehaviorSubject<Joke[]>([]);
  private jokesLoading$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  constructor(private httpService: HttpClient) {}

  public getJokesList$(): Observable<Joke[]> {
    return this.jokesList$.asObservable();
  }

  public getJokesLoading$(): Observable<boolean> {
    return this.jokesLoading$.asObservable();
  }

  public getJokes() {
    this.getJoke()
      .pipe(
        repeat(),
        filter((joke: Joke) => {
          // add to list
          this.jokesList$.next([...this.jokesList$.getValue(), joke]);
          return !(this.jokesList$.getValue().length < 10);
        }),
        take(1)
      )
      .subscribe((_) => {
        this.startAutoFetching();
      });
  }
  startAutoFetching() {
    let autoRefresher = timer(0, 5000)
      .pipe(
        exhaustMap(() => this.getJoke()),
        skip(1)
      )
      .subscribe((response) => {
      });
  }

  private getJoke(): Observable<Joke> {
    return this.httpService
      .get<JokeAPIResponse>(URL)
      .pipe(map((joke: JokeAPIResponse) => this.mapJoke(joke)));
  }

  private mapJoke(serverJoke: JokeAPIResponse): Joke {
    return {
      createdAt: new Date(serverJoke.created_at),
      iconUrl: serverJoke.icon_url,
      id: serverJoke.id,
      updatedAt: new Date(serverJoke.updated_at),
      url: serverJoke.url,
      value: serverJoke.value,
    };
  }
}
