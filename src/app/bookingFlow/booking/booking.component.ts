import {Component, OnInit} from '@angular/core';
import * as Phone from '../../components/contact/assets/headphones.png';
// @ts-ignore
import moment from 'moment';
import BookingService from './booking.service';
import {bookedData} from '../bookingdata';
import {
  DaySchedule, DayScheduleImpl,
  DisplayBookingSlot,
  DisplayBookingSlotImpl
} from "../../adminFlow/admin-calendar/admin-calendar.component";

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

  // public weekTimeSlots = [];

  constructor(private bookingService: BookingService) {
  }

  ngOnInit() {
    this.bookingService.clearBooking();
    this.currentWeek = this.selectedWeek = moment().week();
    this.updateWeekView();
  }

  getDays(days): DaySchedule {
    const format = 'dddd, DD MMM';
    return days.map(dayObject => {
      const dayDate = moment(dayObject.dayDate);
      return new DayScheduleImpl(
        dayDate.locale('sv-SE').format(format),
        dayDate.locale('sv-SE').format('DD MMM'),
        this.getTimes(dayDate, dayObject.slots),
        dayDate.locale('sv-SE').format('dddd').toUpperCase());
    });
  }

  getTimes(day: moment.Moment, slots): DisplayBookingSlot[] {
    return slots.map(slot => {
      const slotTime: moment.Moment = moment(day).add(slot.hour, 'h');
      return new DisplayBookingSlotImpl(
        slotTime,
        moment(slotTime).format('HH:mm'),
        this.isTimeAvailable(slotTime) && slot.available,
        null
      );
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
      console.log(json.result);
      this.timeSlots = this.getDays(json.result);
      console.log(this.timeSlots);
    });
  }
}
