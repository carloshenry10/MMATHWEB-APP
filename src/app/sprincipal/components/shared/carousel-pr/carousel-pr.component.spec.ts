import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPrComponent } from './carousel-pr.component';

describe('CarouselPrComponent', () => {
  let component: CarouselPrComponent;
  let fixture: ComponentFixture<CarouselPrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselPrComponent]
    });
    fixture = TestBed.createComponent(CarouselPrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
