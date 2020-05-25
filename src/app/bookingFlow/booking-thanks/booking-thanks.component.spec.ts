import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingThanksComponent } from './booking-thanks.component';

describe('BookingThanksComponent', () => {
  let component: BookingThanksComponent;
  let fixture: ComponentFixture<BookingThanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingThanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingThanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
