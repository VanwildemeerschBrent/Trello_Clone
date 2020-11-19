/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BoardOverviewComponent } from './board-overview.component';
import { BoardService } from '../../services/board.service';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder } from '@angular/forms';


describe('BoardOverviewComponent', () => {
  let component: BoardOverviewComponent;
  let fixture: ComponentFixture<BoardOverviewComponent>;
  let mockBoardService;

  beforeEach(waitForAsync(() => {
    mockBoardService = jasmine.createSpyObj(['getAllTrelloBoards', 'createTrelloBoard', 'deleteTrelloBoard'])
    TestBed.configureTestingModule({
      declarations: [BoardOverviewComponent],
      imports: [RouterTestingModule],
      providers: [FormBuilder, {
        provide: BoardService, useValue: mockBoardService
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
