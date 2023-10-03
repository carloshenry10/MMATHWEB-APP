import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsClientsPrComponent } from './testimonials-clients-pr.component';

describe('TestimonialsClientsPrComponent', () => {
  let component: TestimonialsClientsPrComponent;
  let fixture: ComponentFixture<TestimonialsClientsPrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestimonialsClientsPrComponent]
    });
    fixture = TestBed.createComponent(TestimonialsClientsPrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
