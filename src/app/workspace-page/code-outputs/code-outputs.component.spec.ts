import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeOutputsComponent } from './code-outputs.component';

describe('CodeOutputsComponent', () => {
  let component: CodeOutputsComponent;
  let fixture: ComponentFixture<CodeOutputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeOutputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeOutputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
