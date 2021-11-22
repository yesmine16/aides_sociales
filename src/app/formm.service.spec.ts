import { TestBed } from '@angular/core/testing';

import { FormmService } from './formm.service';

describe('FormmService', () => {
  let service: FormmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
