/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthenticationService } from './authentication.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Service: Authentication', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should ...', inject([AuthenticationService, HttpTestingController],
    (service: AuthenticationService, httpClient: HttpTestingController) => {
      expect(service).toBeTruthy();
    }));

  it('isLoggedIn() should return boolean value', inject([AuthenticationService, HttpTestingController],
    (service: AuthenticationService, httpClient: HttpTestingController) => {
      expect(service.isLoggedIn()).toBeFalsy();
    }));
});
