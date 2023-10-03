import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorPrComponent } from './indicator-pr.component';

describe('IndicatorPrComponent', () => {
  let component: IndicatorPrComponent;
  let fixture: ComponentFixture<IndicatorPrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndicatorPrComponent]
    });
    fixture = TestBed.createComponent(IndicatorPrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
