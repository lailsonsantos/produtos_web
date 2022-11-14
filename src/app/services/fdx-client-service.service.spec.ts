import { TestBed } from '@angular/core/testing';

import { FdxClientServiceService } from './fdx-client-service.service';

describe('FdxClientServiceService', () => {
  let service: FdxClientServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FdxClientServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
