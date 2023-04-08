import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { FavoriteListComponent } from './favorite-list.component';
import { JokesService } from 'src/app/modules/+jokes/services/jokes.service';

const JOKE_ARRAY = [
  { 
    createdAt: new Date('2020-01-05T12:42:23.484Z'),
    iconUrl: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
    id: '-Du82AQAQPqzh9G6KmXhrw',
    updatedAt: new Date('2020-01-05T12:42:23.484Z'),
    url: 'https://api.chucknorris.io/jokes/-Du82AQAQPqzh9G6KmXhrw',
    value:
      "Chuck Norris doesn't clip his fingernails. He rips them with his bare hands and regrows new ones immediately.",
    isFavorite: true,
  },
  {
    createdAt: new Date('2020-01-05T12:42:19.897Z'),
    iconUrl: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
    id: 'p1HYJoQ3T66Ut1gBxGW7UA',
    updatedAt: new Date('2020-01-05T12:42:19.897Z'),
    url: 'https://api.chucknorris.io/jokes/p1HYJoQ3T66Ut1gBxGW7UA',
    value:
      "If you dare to eat a bowl Chuck Norris' homemade Texas Hot Chile and later take a dump, you'll need to wipe your ass with a snow cone.",
    isFavorite: true,
  },
  {
    createdAt: new Date('2020-01-05T12:42:30.177Z'),
    iconUrl: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
    id: 'vHLMmpyAQsuk7uMbiYlebw',
    updatedAt: new Date('2020-01-05T12:42:30.177Z'),
    url: 'https://api.chucknorris.io/jokes/vHLMmpyAQsuk7uMbiYlebw',
    value: 'Austin Staggs once beat up Chuck Norris',
    isFavorite: true,
  },
  {
    createdAt: new Date('2020-01-05T12:42:28.420Z'),
    iconUrl: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
    id: 'gIN_0wcoT6SzeUg7uqjUnQ',
    updatedAt: new Date('2020-01-05T12:42:28.420Z'),
    url: 'https://api.chucknorris.io/jokes/gIN_0wcoT6SzeUg7uqjUnQ',
    value: 'Chuck Norris paints his house once a year with a human head.',
    isFavorite: true,
  },
  {
    createdAt: new Date('2020-01-05T12:42:19.576Z'),
    iconUrl: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
    id: 'HXXgTT-CSqmCW4MXhqfTjA',
    updatedAt: new Date('2020-01-05T12:42:19.576Z'),
    url: 'https://api.chucknorris.io/jokes/HXXgTT-CSqmCW4MXhqfTjA',
    value:
      'Chuck Norris calculated the square root of negative one while eating a bowl full of rusty fishhooks.',
    isFavorite: true,
  },
  {
    createdAt: new Date('2020-01-05T12:42:21.179Z'),
    iconUrl: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
    id: 'b5N7FhzdR32NqPpvBw5ZaA',
    updatedAt: new Date('2020-01-05T12:42:21.179Z'),
    url: 'https://api.chucknorris.io/jokes/b5N7FhzdR32NqPpvBw5ZaA',
    value:
      'Did you know that Chuck Norris is not held on Earth by Gravity? He simply clings on the surface using his toes.',
    isFavorite: true,
  },
  {
    createdAt: new Date('2020-01-05T12:42:25.628Z'),
    iconUrl: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
    id: 'GLdmhEhyTRCz-IsmXs9QZA',
    updatedAt: new Date('2020-01-05T12:42:25.628Z'),
    url: 'https://api.chucknorris.io/jokes/GLdmhEhyTRCz-IsmXs9QZA',
    value: 'We all need somebody to lean on. Except for CHuck Norris.',
    isFavorite: true,
  },
  {
    createdAt: new Date('2020-01-05T12:42:20.841Z'),
    iconUrl: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
    id: 'HQNc1r1dQPGRzue_yWSvaw',
    updatedAt: new Date('2020-01-05T12:42:20.841Z'),
    url: 'https://api.chucknorris.io/jokes/HQNc1r1dQPGRzue_yWSvaw',
    value: 'Chuck Norris can do donuts in a steam train',
    isFavorite: true,
  },
  {
    createdAt: new Date('2020-01-05T12:42:19.576Z'),
    iconUrl: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
    id: 't3bkbda-s06y4vgzun7xaa',
    updatedAt: new Date('2020-01-05T12:42:19.576Z'),
    url: 'https://api.chucknorris.io/jokes/t3bkbda-s06y4vgzun7xaa',
    value: 'Chuck Norris drinks napalm to quell his heartburn.',
    isFavorite: true,
  },
  {
    createdAt: new Date('2020-01-05T12:42:29.569Z'),
    iconUrl: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
    id: 'wlHoTOnUQee-wxvBaqc2tg',
    updatedAt: new Date('2020-01-05T12:42:29.569Z'),
    url: 'https://api.chucknorris.io/jokes/wlHoTOnUQee-wxvBaqc2tg',
    value: 'Wheaties are actually flash dried Chuck Norris boogers.',
    isFavorite: true,
  },
];

class MockJokeService {
  getJokesList$() {
    return of(JOKE_ARRAY);
  }
  getJokes() {}
}

describe('FavoriteListComponent', () => {
  let component: FavoriteListComponent;
  let fixture: ComponentFixture<FavoriteListComponent>;
  let mockJokeService;

  beforeEach(async () => {
    mockJokeService = new MockJokeService();
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [FavoriteListComponent],
      providers: [{ provide: JokesService, useValue: mockJokeService }],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoriteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
    const serv = TestBed.inject(JokesService);
  });

  it('should createa', () => {
    expect(true).toBeTruthy();
  });
});
