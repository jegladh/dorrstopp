import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsFrontpageComponent } from './ds-frontpage.component';

describe('DsFrontpageComponent', () => {
  let component: DsFrontpageComponent;
  let fixture: ComponentFixture<DsFrontpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsFrontpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsFrontpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
