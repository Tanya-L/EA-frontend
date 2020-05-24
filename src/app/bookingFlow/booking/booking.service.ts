
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class BookingService {
  public selectedTimeSlot = null;
  public isCancelling = false;

  constructor() { }

  selectTimeSlot(slot) {
    this.selectedTimeSlot = slot;
  }

  selectCancellation(isCancel) {
    this.selectTimeSlot(null);
    this.isCancelling = isCancel;

  }
}
