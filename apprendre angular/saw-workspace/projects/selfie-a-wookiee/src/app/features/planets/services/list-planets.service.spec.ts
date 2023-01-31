import { TestBed } from '@angular/core/testing';

import { ListPlanetsService } from './list-planets.service';

describe('ListPlanetsService', () => {
  let service: ListPlanetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListPlanetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
