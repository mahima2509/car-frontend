import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePaymentComponent } from './updatepayment.component';

describe('UpdatepaymentComponent', () => {
  let component: UpdatePaymentComponent;
  let fixture: ComponentFixture<UpdatePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
