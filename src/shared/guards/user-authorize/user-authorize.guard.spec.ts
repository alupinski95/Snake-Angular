import { TestBed } from '@angular/core/testing';

import { UserAuthorizeGuard } from './user-authorize.guard';

describe('UserAuthorizeGuard', () => {
  let guard: UserAuthorizeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserAuthorizeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
