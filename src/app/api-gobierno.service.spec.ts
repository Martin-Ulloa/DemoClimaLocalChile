import { TestBed } from '@angular/core/testing';

import { ApiGobiernoService } from './api-gobierno.service';

describe('ApiGobiernoService', () => {
  let service: ApiGobiernoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiGobiernoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
