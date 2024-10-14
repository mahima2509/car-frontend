import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchpaymentComponent } from './searchpayment.component';

describe('SearchpaymentComponent', () => {
  let component: SearchpaymentComponent;
  let fixture: ComponentFixture<SearchpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchpaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
