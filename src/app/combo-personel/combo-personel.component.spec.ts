import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboPersonelComponent } from './combo-personel.component';

describe('ComboPersonelComponent', () => {
  let component: ComboPersonelComponent;
  let fixture: ComponentFixture<ComboPersonelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComboPersonelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboPersonelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
