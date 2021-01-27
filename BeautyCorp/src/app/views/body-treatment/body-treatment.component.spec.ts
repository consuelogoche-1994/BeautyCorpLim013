import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyTreatmentComponent } from './body-treatment.component';

describe('BodyTreatmentComponent', () => {
  let component: BodyTreatmentComponent;
  let fixture: ComponentFixture<BodyTreatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyTreatmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
