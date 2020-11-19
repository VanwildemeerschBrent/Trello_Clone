/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BoardService } from './board.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';

describe('Service: Board', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoardService, FormBuilder],
      imports: [HttpClientTestingModule]
    });
  });

  it('should ...', inject([BoardService], (service: BoardService) => {
    expect(service).toBeTruthy();
  }));
});
