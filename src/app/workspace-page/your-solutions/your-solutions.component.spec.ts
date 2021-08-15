import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourSolutionsComponent } from './your-solutions.component';

describe('YourSolutionsComponent', () => {
  let component: YourSolutionsComponent;
  let fixture: ComponentFixture<YourSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourSolutionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
