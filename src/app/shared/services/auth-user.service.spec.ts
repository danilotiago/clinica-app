import { TestBed } from '@angular/core/testing';

import { AuthUserService } from './auth-user.service';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthUserService = TestBed.get(AuthUserService);
    expect(service).toBeTruthy();
  });
});
