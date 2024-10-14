import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayallcabComponent } from './displayallcab.component';

describe('DisplayallcabComponent', () => {
  let component: DisplayallcabComponent;
  let fixture: ComponentFixture<DisplayallcabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayallcabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayallcabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
