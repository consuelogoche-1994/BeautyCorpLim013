import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacialTreatmentComponent } from './facial-treatment.component';

describe('FacialTreatmentComponent', () => {
  let component: FacialTreatmentComponent;
  let fixture: ComponentFixture<FacialTreatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacialTreatmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacialTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
