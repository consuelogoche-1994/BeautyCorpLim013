import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTransferenceComponent } from './payment-transference.component';

describe('PaymentTransferenceComponent', () => {
  let component: PaymentTransferenceComponent;
  let fixture: ComponentFixture<PaymentTransferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentTransferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentTransferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
