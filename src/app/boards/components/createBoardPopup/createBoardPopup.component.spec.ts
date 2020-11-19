/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CreateBoardPopupComponent } from './createBoardPopup.component';
import { FormBuilder } from '@angular/forms';

describe('CreateBoardPopupComponent', () => {
  let component: CreateBoardPopupComponent;
  let fixture: ComponentFixture<CreateBoardPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateBoardPopupComponent],
      imports: [HttpClientTestingModule],
      providers: [FormBuilder]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBoardPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
