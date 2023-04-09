import { Component } from '@angular/core';
import { JokesService } from '../../services/jokes.service';
import { Observable } from 'rxjs';
import { Joke } from 'src/app/typings';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})
export class JokeListComponent {
  protected jokesList$!: Observable<Joke[]>;
  protected jokesLoading$!: Observable<boolean>;
  
  constructor(private jokesService: JokesService){}

  ngOnInit(){
    this.jokesList$ = this.jokesService.getJokesList$();
    this.jokesService.getJokes();
  }

  ngOnDestroy(){
    this.jokesService.reset();
  }
}
