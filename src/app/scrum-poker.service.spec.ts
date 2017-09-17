import { TestBed, inject } from '@angular/core/testing';

import { ScrumPokerService } from './scrum-poker.service';

describe('ScrumPokerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScrumPokerService]
    });
  });

  it('should ...', inject([ScrumPokerService], (service: ScrumPokerService) => {
    expect(service).toBeTruthy();
  }));
});
