import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombosDetailsComponent } from './combos-details.component';

describe('CombosDetailsComponent', () => {
  let component: CombosDetailsComponent;
  let fixture: ComponentFixture<CombosDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombosDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
