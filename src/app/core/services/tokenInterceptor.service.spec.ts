/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TokenInterceptorService } from './tokenInterceptor.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('Service: TokenInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenInterceptorService],
      imports: [HttpClientTestingModule, RouterTestingModule],

    });
  });

  it('should ...', inject([TokenInterceptorService, HttpTestingController],
    (service: TokenInterceptorService, httpClient: HttpTestingController) => {
      expect(service).toBeTruthy();
    }));
});
