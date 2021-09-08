import { TestBed } from '@angular/core/testing';

import { DsStoppisService } from './ds-stoppis.service';

describe('DsStoppisService', () => {
  let service: DsStoppisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DsStoppisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
