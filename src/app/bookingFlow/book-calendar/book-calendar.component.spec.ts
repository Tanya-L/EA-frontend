import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCalendarComponent } from './book-calendar.component';

describe('BookCalendarComponent', () => {
  let component: BookCalendarComponent;
  let fixture: ComponentFixture<BookCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
