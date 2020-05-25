import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelThanksComponent } from './cancel-thanks.component';

describe('CancelThanksComponent', () => {
  let component: CancelThanksComponent;
  let fixture: ComponentFixture<CancelThanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelThanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelThanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
