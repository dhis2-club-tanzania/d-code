import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedcodesComponent } from './submittedcodes.component';

describe('SubmittedcodesComponent', () => {
  let component: SubmittedcodesComponent;
  let fixture: ComponentFixture<SubmittedcodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmittedcodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmittedcodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
