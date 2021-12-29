import { TestBed } from '@angular/core/testing';

import { FichierGuard } from './fichier.guard';

describe('FichierGuard', () => {
  let guard: FichierGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FichierGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
