/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { EditIssuePopupComponent } from './editIssuePopup.component';

describe('EditIssuePopupComponent', () => {
  let component: EditIssuePopupComponent;
  let fixture: ComponentFixture<EditIssuePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditIssuePopupComponent],
      imports: [HttpClientTestingModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditIssuePopupComponent);
    component = fixture.componentInstance;
    component.issue = { _id: 0, title: 'Test issue', description: 'Test issue description' };
    fixture.detectChanges();
  });

  it('should create', () => {

    expect(component).toBeTruthy();
  });
});
