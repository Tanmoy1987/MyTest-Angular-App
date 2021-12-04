import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { FollowerService } from './follower.service';

describe('FollowerService', () => {
  let service: FollowerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(FollowerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
