import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPrComponent } from './nav-pr.component';

describe('NavPrComponent', () => {
  let component: NavPrComponent;
  let fixture: ComponentFixture<NavPrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavPrComponent]
    });
    fixture = TestBed.createComponent(NavPrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
