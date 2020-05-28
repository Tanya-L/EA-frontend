import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class BookingService {
  public selectedTimeSlot = null;

  constructor() {
  }

  selectTimeSlot(slot) {
    this.selectedTimeSlot = slot;
  }

  // user booking
  getBookings(week: number) {
    return fetch(`http://localhost:4000/booking?week=${week}`)
      .then(response => response.json());
  }

  // admin booking
  getBookingsAdmin(week: number, token: string) {
    return fetch(`http://localhost:4000/booking/admin?week=${week}&token=${token}`)
      .then(response => response.json());
  }

  bookTime(bookingData) {
    return fetch(`http://localhost:4000/booking`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    })
      .then(response => response.json());
  }

  cancelAppointment(bookingCode) {

    return fetch(`http://localhost:4000/booking?bookingCode=${bookingCode}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json());
  }
}
