import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsikaComponent } from './esika.component';

describe('EsikaComponent', () => {
  let component: EsikaComponent;
  let fixture: ComponentFixture<EsikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsikaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
