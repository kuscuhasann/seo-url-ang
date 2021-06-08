/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SelamiComponent } from './selami.component';

describe('SelamiComponent', () => {
  let component: SelamiComponent;
  let fixture: ComponentFixture<SelamiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelamiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
