/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DownNavComponent } from './down-nav.component';

describe('DownNavComponent', () => {
  let component: DownNavComponent;
  let fixture: ComponentFixture<DownNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
