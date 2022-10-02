import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsKontaktComponent } from './ds-kontakt.component';

describe('DsKontaktComponent', () => {
  let component: DsKontaktComponent;
  let fixture: ComponentFixture<DsKontaktComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsKontaktComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsKontaktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
