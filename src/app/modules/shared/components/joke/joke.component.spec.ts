import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeComponent } from './joke.component';
import { FavoriteEditService } from '../../services/favorite-edit.service';
import { SharedModule } from '../../shared.module';
import { Joke } from 'src/app/typings';

describe('JokeComponent', () => {
  const joke: Joke = {
    createdAt: new Date('2020-01-05T12:42:23.484Z'),
    iconUrl: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
    id: '-Du82AQAQPqzh9G6KmXhrw',
    updatedAt:  new Date('2020-01-05T12:42:23.484Z'),
    url: 'https://api.chucknorris.io/jokes/-Du82AQAQPqzh9G6KmXhrw',
    value:
      "Chuck Norris doesn't clip his fingernails. He rips them with his bare hands and regrows new ones immediately.",
    isFavorite: true,
  };
  let component: JokeComponent;
  let fixture: ComponentFixture<JokeComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ JokeComponent ],
      providers: [
        { provide: FavoriteEditService, useValue: true },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokeComponent);
    compiled = fixture.debugElement.nativeElement;
    component = fixture.componentInstance;
    component.joke =  joke;
    fixture.detectChanges();
  });

  it('should create', () => {    
    expect(component).toBeTruthy();
  });

  it('text should equal input joke', () => {    
    expect(compiled.querySelector('#joke-text')?.textContent).toContain(joke.value);
  });
});
