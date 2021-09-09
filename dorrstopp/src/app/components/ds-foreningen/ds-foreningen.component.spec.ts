import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsForeningenComponent } from './ds-foreningen.component';

describe('DsForeningenComponent', () => {
  let component: DsForeningenComponent;
  let fixture: ComponentFixture<DsForeningenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsForeningenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsForeningenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
