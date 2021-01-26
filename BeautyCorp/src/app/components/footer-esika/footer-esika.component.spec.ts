import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterEsikaComponent } from './footer-esika.component';

describe('FooterEsikaComponent', () => {
  let component: FooterEsikaComponent;
  let fixture: ComponentFixture<FooterEsikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterEsikaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterEsikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
