import { TestBed } from '@angular/core/testing';

import { ReservasApiClientService } from './reservas-api-client.service';

describe('ReservasApiClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReservasApiClientService = TestBed.get(ReservasApiClientService);
    expect(service).toBeTruthy();
  });
});
