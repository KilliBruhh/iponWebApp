import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombosViewComponent } from './combos-view.component';

describe('CombosViewComponent', () => {
  let component: CombosViewComponent;
  let fixture: ComponentFixture<CombosViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombosViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombosViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
