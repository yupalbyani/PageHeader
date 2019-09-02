import { TestBed } from '@angular/core/testing';

import { PageheaderService } from './pageheader.service';

describe('PageheaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageheaderService = TestBed.get(PageheaderService);
    expect(service).toBeTruthy();
  });
});
