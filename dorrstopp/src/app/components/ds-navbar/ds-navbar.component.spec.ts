import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsNavbarComponent } from './ds-navbar.component';

describe('DsNavbarComponent', () => {
  let component: DsNavbarComponent;
  let fixture: ComponentFixture<DsNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
