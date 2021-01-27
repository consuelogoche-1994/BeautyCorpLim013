import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPaymentsComponent } from './navbar-payments.component';

describe('NavbarPaymentsComponent', () => {
  let component: NavbarPaymentsComponent;
  let fixture: ComponentFixture<NavbarPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarPaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
