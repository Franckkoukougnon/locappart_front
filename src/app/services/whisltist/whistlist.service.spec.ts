import { TestBed } from '@angular/core/testing';

import { WhistlistService } from './whistlist.service';

describe('WhistlistService', () => {
  let service: WhistlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhistlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
