import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsikaPaymentsComponent } from './esika-payments.component';

describe('EsikaPaymentsComponent', () => {
  let component: EsikaPaymentsComponent;
  let fixture: ComponentFixture<EsikaPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsikaPaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsikaPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
