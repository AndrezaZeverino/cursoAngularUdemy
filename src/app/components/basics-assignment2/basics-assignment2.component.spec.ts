import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicsAssignment2Component } from './basics-assignment2.component';

describe('BasicsAssignment2Component', () => {
  let component: BasicsAssignment2Component;
  let fixture: ComponentFixture<BasicsAssignment2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicsAssignment2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicsAssignment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
