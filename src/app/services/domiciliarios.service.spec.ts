import { TestBed } from '@angular/core/testing';

import { DomiciliariosService } from './domiciliarios.service';

describe('DomiciliariosService', () => {
  let service: DomiciliariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomiciliariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
