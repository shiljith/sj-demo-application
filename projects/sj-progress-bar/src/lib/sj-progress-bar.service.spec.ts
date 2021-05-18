import { TestBed } from '@angular/core/testing';

import { SjProgressBarService } from './sj-progress-bar.service';

describe('SjProgressBarService', () => {
  let service: SjProgressBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SjProgressBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
