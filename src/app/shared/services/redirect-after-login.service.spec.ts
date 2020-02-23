import { TestBed } from '@angular/core/testing';

import { RedirectAfterLoginService } from './redirect-after-login.service';

describe('RedirectAfterLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RedirectAfterLoginService = TestBed.get(RedirectAfterLoginService);
    expect(service).toBeTruthy();
  });
});
