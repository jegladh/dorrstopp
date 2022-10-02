import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsStoppisDialogComponent } from './ds-stoppis-dialog.component';

describe('DsStoppisDialogComponent', () => {
  let component: DsStoppisDialogComponent;
  let fixture: ComponentFixture<DsStoppisDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsStoppisDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsStoppisDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
