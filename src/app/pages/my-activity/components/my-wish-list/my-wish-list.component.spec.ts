/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyWishListComponent } from './my-wish-list.component';

describe('MyWishListComponent', () => {
  let component: MyWishListComponent;
  let fixture: ComponentFixture<MyWishListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyWishListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
