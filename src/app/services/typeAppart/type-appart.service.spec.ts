import { TestBed } from '@angular/core/testing';

import { TypeAppartService } from './type-appart.service';

describe('TypeAppartService', () => {
  let service: TypeAppartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeAppartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
