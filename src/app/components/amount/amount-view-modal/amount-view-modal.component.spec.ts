import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountViewModalComponent } from './amount-view-modal.component';

describe('AmountViewModalComponent', () => {
  let component: AmountViewModalComponent;
  let fixture: ComponentFixture<AmountViewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountViewModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
