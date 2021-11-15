import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountEditModalComponent } from './amount-edit-modal.component';

describe('AmountEditModalComponent', () => {
  let component: AmountEditModalComponent;
  let fixture: ComponentFixture<AmountEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountEditModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
