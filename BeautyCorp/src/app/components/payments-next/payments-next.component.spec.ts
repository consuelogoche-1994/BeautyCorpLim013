import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsNextComponent } from './payments-next.component';

describe('PaymentsNextComponent', () => {
  let component: PaymentsNextComponent;
  let fixture: ComponentFixture<PaymentsNextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsNextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
