import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPaymentsComponent } from './content-payments.component';

describe('ContentPaymentsComponent', () => {
  let component: ContentPaymentsComponent;
  let fixture: ComponentFixture<ContentPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentPaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
