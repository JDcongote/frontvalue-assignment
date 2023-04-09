import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from '../constants';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Joke, JokeAPIResponse } from 'src/app/typings';
import {
  Observable,
  Subscription,
  exhaustMap,
  filter,
  map,
  repeat,
  skip,
  take,
  timer,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JokesService {
  private jokesList$: BehaviorSubject<Joke[]> = new BehaviorSubject<Joke[]>(Array(10));
  private jokesLoading$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  autoFetcher!: Subscription;
  constructor(private httpService: HttpClient) {}

  public getJokesList$(): Observable<Joke[]> {
    return this.jokesList$.asObservable();
  }

  public getJokesLoading$(): Observable<boolean> {
    return this.jokesLoading$.asObservable();
  }
  
  public getJokes() {
    let index = 0;
    let list = this.jokesList$.getValue();
    this.getJoke()
      .pipe(
        repeat(),
        filter((joke: Joke) => {
          // add to list
          list[index++] = joke;
          this.jokesList$.next(list);
          return !(index < 10);
        }),
        take(1)
      )
      .subscribe((_) => {
        this.startAutoFetching();
      });
  }

  /**
   * stop the auto refresher, reset the list
   */
  public reset() {
    this.autoFetcher?.unsubscribe();
    this.jokesList$ = new BehaviorSubject<Joke[]>(Array(10));
  }

  /**
   * will start a subscription that fetches a new joke every 5 seconds and replaces the oldest one in the list
   */
  private startAutoFetching() {
    // fetching them every 8 seconds, 5 is to little time to read new jokes.
    this.autoFetcher = timer(0, 8000)
      .pipe(
        exhaustMap(() => this.getJoke()),
        skip(1)
      )
      .subscribe((response) => {
        let jokeList = [...this.jokesList$.getValue()];
        jokeList.sort((a: Joke, b: Joke) => {
          return a.createdAt < b.createdAt ? -1 : 1;
        });
        const firstJoke = jokeList[0];
        const idx = this.jokesList$.getValue().findIndex((joke: Joke) => joke?.id === firstJoke.id);
        jokeList = [...this.jokesList$.getValue()];
        jokeList[idx].isLeaving = true;
        setTimeout(() => {
          jokeList[idx] = response;
          jokeList[idx].isArriving = true;
        },1000);
        
        this.jokesList$.next(jokeList);
      });
  }

  private getJoke(): Observable<Joke> {
    return this.httpService
      .get<JokeAPIResponse>(URL)
      .pipe(map((joke: JokeAPIResponse) => this.mapJoke(joke)));
  }

  /**
   * Maps a response joke to this applications typings
   * @param serverJoke 
   * @returns 
   */
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
