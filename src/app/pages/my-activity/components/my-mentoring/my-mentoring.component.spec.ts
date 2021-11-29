/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyMentoringComponent } from './my-mentoring.component';

describe('MyMentoringComponent', () => {
  let component: MyMentoringComponent;
  let fixture: ComponentFixture<MyMentoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMentoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMentoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
