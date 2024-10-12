import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecabComponent } from './updatecab.component';

describe('UpdatecabComponent', () => {
  let component: UpdatecabComponent;
  let fixture: ComponentFixture<UpdatecabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatecabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
