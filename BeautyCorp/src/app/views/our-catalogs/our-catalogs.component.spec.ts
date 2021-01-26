import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCatalogsComponent } from './our-catalogs.component';

describe('OurCatalogsComponent', () => {
  let component: OurCatalogsComponent;
  let fixture: ComponentFixture<OurCatalogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurCatalogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurCatalogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
