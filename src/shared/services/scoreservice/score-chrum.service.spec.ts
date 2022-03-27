import { TestBed } from '@angular/core/testing';

import { ScoreChrumService } from './score-chrum.service';

describe('ScoreChrumService', () => {
  let service: ScoreChrumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoreChrumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
