import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPrComponent } from './footer-pr.component';

describe('FooterPrComponent', () => {
  let component: FooterPrComponent;
  let fixture: ComponentFixture<FooterPrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterPrComponent]
    });
    fixture = TestBed.createComponent(FooterPrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
