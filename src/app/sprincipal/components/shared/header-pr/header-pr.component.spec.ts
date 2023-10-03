import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPrComponent } from './header-pr.component';

describe('HeaderPrComponent', () => {
  let component: HeaderPrComponent;
  let fixture: ComponentFixture<HeaderPrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderPrComponent]
    });
    fixture = TestBed.createComponent(HeaderPrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
