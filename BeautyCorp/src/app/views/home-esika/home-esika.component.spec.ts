import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEsikaComponent } from './home-esika.component';

describe('HomeEsikaComponent', () => {
  let component: HomeEsikaComponent;
  let fixture: ComponentFixture<HomeEsikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeEsikaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEsikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
