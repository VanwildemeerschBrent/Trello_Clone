/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, inject, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RegistrationComponent } from './registration.component';
import { UserService } from '../../services/user.service';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  let mockUserService;

  beforeEach(waitForAsync(() => {
    mockUserService = jasmine.createSpyObj(['register']);
    TestBed.configureTestingModule({
      declarations: [RegistrationComponent, RouterTestingModule],
      providers: [FormBuilder, , {
        provide: UserService, useValue: mockUserService
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
