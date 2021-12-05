/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppliedUniversitiesItemComponent } from './applied-universities-item.component';

describe('AppliedUniversitiesItemComponent', () => {
  let component: AppliedUniversitiesItemComponent;
  let fixture: ComponentFixture<AppliedUniversitiesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliedUniversitiesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliedUniversitiesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
