import { TestBed } from '@angular/core/testing';

import { EmailUsedValidatorAsync } from './email-used-validator-async';

describe('EmailUsedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmailUsedValidatorAsync = TestBed.get(EmailUsedValidatorAsync);
    expect(service).toBeTruthy();
  });
});
