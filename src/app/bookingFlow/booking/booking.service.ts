import {Injectable} from '@angular/core';
import moment from 'moment';
import {DisplayBookingSlot} from '../../adminFlow/admin-calendar/admin-calendar.component';

@Injectable({
  providedIn: 'root'
})
export default class BookingService {
  public selectedTimeSlot: DisplayBookingSlot = null;
  public bookingData = null;

  constructor() {
  }

  selectTimeSlot(slot) {
    if (slot) {
      console.log(`clicked date: ${slot.date.toISOString()}`);
    }
    this.selectedTimeSlot = slot;
  }

  clearBooking() {
    this.selectedTimeSlot = null;
    this.bookingData = null;
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
    this.bookingData = bookingData.booking;
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

  getSelectedDateOfWeek() {
    return moment(this.selectedTimeSlot.date).locale('sv-SE').format('dddd').toUpperCase();
  }

  getSelectedDate() {
    return moment(this.selectedTimeSlot.date).locale('sv-SE').format('DD MMMM YYYY');
  }

  getSelectedTime() {
    return moment(this.selectedTimeSlot.date).format('HH:mm');
  }

  getError(errorCode) {
    switch (errorCode) {
      case 'notExists':
        return 'The booking code is not valid';
      case 'inThePast':
        return 'The time is passed, please select another time slot';
      case 'bookingExists':
        return 'This time is already booked, please select another time slot';
      case 'notWorkingDay':
        return 'This time is not available, please select another time slot';
      default:
        return 'Ooops! Something went wrong. Please try again later!';
    }
  }
}
