import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { JokesService } from './jokes.service';
import { Joke, JokeAPIResponse } from 'src/app/typings';
import { skip } from 'rxjs';

describe('JokesService', () => {
  const JOKE: JokeAPIResponse = {
    created_at: '2020-01-05T12:42:23.484Z',
    icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
    id: '-Du82AQAQPqzh9G6KmXhrw',
    updated_at: '2020-01-05T12:42:23.484Z',
    url: 'https://api.chucknorris.io/jokes/-Du82AQAQPqzh9G6KmXhrw',
    value:
      "Chuck Norris doesn't clip his fingernails. He rips them with his bare hands and regrows new ones immediately.",
  };

  const JOKE_RESPONSE: Joke = 
    {
      createdAt: new Date('2020-01-05T12:42:23.484Z'),
      iconUrl: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
      id: '-Du82AQAQPqzh9G6KmXhrw',
      updatedAt: new Date('2020-01-05T12:42:23.484Z'),
      url: 'https://api.chucknorris.io/jokes/-Du82AQAQPqzh9G6KmXhrw',
      value:
        "Chuck Norris doesn't clip his fingernails. He rips them with his bare hands and regrows new ones immediately.",
    };

  let service: JokesService;
  let httpCtrl: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(JokesService);
    httpCtrl = TestBed.inject(HttpTestingController);
  });

  it('Should return jokes from Http Get call.', () => {
    const obs = service.getJokesList$();
    obs.pipe(skip(1)).subscribe({
      next: (response) => {
        expect(response).toBeTruthy();
        expect(response[0]).toEqual(JOKE_RESPONSE);
      },
    });
    service.getJokes();

    const mockHttp = httpCtrl.expectOne(
      'https://api.chucknorris.io/jokes/random'
    );
    const httpRequest = mockHttp.request;

    expect(httpRequest.method).toEqual('GET');

    mockHttp.flush(JOKE);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
