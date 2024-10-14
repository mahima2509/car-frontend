import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllPaymentComponent } from './displayallpayment.component';

describe('DisplayallpaymentComponent', () => {
  let component: DisplayAllPaymentComponent;
  let fixture: ComponentFixture<DisplayAllPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAllPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayAllPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
