import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeltCardComponent } from './belt-card.component';

describe('BeltCardComponent', () => {
  let component: BeltCardComponent;
  let fixture: ComponentFixture<BeltCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeltCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeltCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
