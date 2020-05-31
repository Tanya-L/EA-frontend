import {Component, OnInit} from '@angular/core';
import * as Phone from '../../components/contact/assets/headphones.png';
// @ts-ignore
import moment from 'moment';
import BookingService from './booking.service';
import {bookedData} from '../bookingdata';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  public phone: string = Phone.default;

  public timeSlots: object = [];
  slots: any;
  currentWeek: number;
  selectedWeek: number;
  public weekTimeSlots = [];

  constructor(private bookingService: BookingService) {
  }

  ngOnInit() {
    this.bookingService.clearBooking();
    this.currentWeek = this.selectedWeek = moment().week();
    this.updateWeekView();
  }

  getDays(days) {
    const format = 'dddd, DD MMM';
    return days.map(dayObject => {return {
      day: moment(dayObject.dayDate).format(format),
      date: moment(dayObject.dayDate).format('DD MMM'),
      weekday: moment(dayObject.dayDate).format('dddd'),
      slots: this.getTimes(dayObject.dayDate, dayObject.slots),
    };
    });
  }

  getTimes(date, slots) {
    const day = moment(date);
    return slots.map(slot => {
      const time = day.hour(slot.hour).minutes(0).utc(true);
      return {
        date: time.format(),
        label: time.format('HH:mm'),
        available: this.isTimeAvailable(time) && slot.available,
      };
    });
  }


  isTimeAvailable(time) {
    return time.isAfter(moment());
  }

  onPrevWeekClick() {
    this.selectedWeek = Math.max(this.currentWeek, this.selectedWeek - 1);
    this.updateWeekView();
  }

  onNextWeekClick() {
    this.selectedWeek = Math.min(this.currentWeek + 3, this.selectedWeek + 1);
    this.updateWeekView();
  }

  private updateWeekView() {
    this.bookingService.getBookings(this.selectedWeek).then(json => {
      this.timeSlots = this.getDays(json.result);
    });
  }
}
