import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsStoppisListComponent } from './ds-stoppis-table.component';

describe('DsStoppisListComponent', () => {
  let component: DsStoppisListComponent;
  let fixture: ComponentFixture<DsStoppisListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsStoppisListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsStoppisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
