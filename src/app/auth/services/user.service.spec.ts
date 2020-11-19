/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Service: User', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should ...', inject([UserService, HttpTestingController], (httpClient: HttpTestingController, service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
