import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentYapeComponent } from './payment-yape.component';

describe('PaymentYapeComponent', () => {
  let component: PaymentYapeComponent;
  let fixture: ComponentFixture<PaymentYapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentYapeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentYapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
