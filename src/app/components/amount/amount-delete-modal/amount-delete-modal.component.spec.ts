import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountDeleteModalComponent } from './amount-delete-modal.component';

describe('AmountDeleteModalComponent', () => {
  let component: AmountDeleteModalComponent;
  let fixture: ComponentFixture<AmountDeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountDeleteModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
