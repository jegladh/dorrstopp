import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsStoppisDetailComponent } from './ds-stoppis-detail.component';

describe('DsStoppisDetailComponent', () => {
  let component: DsStoppisDetailComponent;
  let fixture: ComponentFixture<DsStoppisDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsStoppisDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsStoppisDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
