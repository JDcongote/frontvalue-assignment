import { TestBed } from '@angular/core/testing';

import { FavoriteEditService } from './favorite-edit.service';

describe('FavoriteEditService', () => {
  let service: FavoriteEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
