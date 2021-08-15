import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsSamplesComponent } from './tests-samples.component';

describe('TestsSamplesComponent', () => {
  let component: TestsSamplesComponent;
  let fixture: ComponentFixture<TestsSamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestsSamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
