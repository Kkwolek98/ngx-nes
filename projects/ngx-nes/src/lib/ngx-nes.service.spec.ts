import { TestBed } from '@angular/core/testing';

import { NgxNesService } from './ngx-nes.service';

describe('NgxNesService', () => {
  let service: NgxNesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxNesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
