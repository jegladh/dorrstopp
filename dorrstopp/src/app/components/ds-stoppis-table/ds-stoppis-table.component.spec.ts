import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsStoppisTableComponent } from './ds-stoppis-table.component';

describe('DsStoppisListComponent', () => {
  let component: DsStoppisTableComponent;
  let fixture: ComponentFixture<DsStoppisTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsStoppisTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsStoppisTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
