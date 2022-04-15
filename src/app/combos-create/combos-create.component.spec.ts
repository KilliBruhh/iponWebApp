import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombosCreateComponent } from './combos-create.component';

describe('CombosCreateComponent', () => {
  let component: CombosCreateComponent;
  let fixture: ComponentFixture<CombosCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombosCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
