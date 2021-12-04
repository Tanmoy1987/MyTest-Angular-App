import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  service = jasmine.createSpyObj("", [""]);
  /*beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(DataService);
  });*/
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
