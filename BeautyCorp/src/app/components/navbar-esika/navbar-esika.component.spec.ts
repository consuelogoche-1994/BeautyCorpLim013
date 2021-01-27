import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarEsikaComponent } from './navbar-esika.component';

describe('NavbarEsikaComponent', () => {
  let component: NavbarEsikaComponent;
  let fixture: ComponentFixture<NavbarEsikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarEsikaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarEsikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
