import {Component, OnInit} from '@angular/core';
import BookingService from '../../bookingFlow/booking/booking.service';
import {bookedData} from '../../bookingFlow/bookingdata';
import moment from 'moment';

@Component({
  selector: 'app-admin-calendar',
  templateUrl: './admin-calendar.component.html',
  styleUrls: ['./admin-calendar.component.css', '../../bookingFlow/booking/booking.component.css']
})
export class AdminCalendarComponent implements OnInit {
  public timeSlots: object = [];
  slots: any;
  currentWeek: number;
  selectedWeek: number;

  constructor(private bookingService: BookingService) {
  }

  ngOnInit() {
    this.currentWeek = this.selectedWeek = moment().week();
    this.updateWeekView();
  }

  getDays(thisDay) {
    const format = 'dddd, DD MMM';
    return [
      {
        //  Monday
        day: thisDay.day(1).format(format),
        slots: this.getTimes(thisDay.day(1))
      },
      {
        //  Tuesday
        day: thisDay.day(2).format(format),
        slots: this.getTimes(thisDay.day(2))
      },
      {
        //  Wednesday
        day: thisDay.day(3).format(format),
        slots: this.getTimes(thisDay.day(3))
      },
      {
        //  Thursday
        day: thisDay.day(4).format(format),
        slots: this.getTimes(thisDay.day(4))
      },
      {
        //  Friday
        day: thisDay.day(5).format(format),
        slots: this.getTimes(thisDay.day(5))
      },
    ];
  }

  getTimes(day) {
    let slots = [
      this.getTimeSlot(day.hour(8).minutes(0)),
      this.getTimeSlot(day.hour(9).minutes(0)),
      this.getTimeSlot(day.hour(10).minutes(0)),
      this.getTimeSlot(day.hour(11).minutes(0)),
      this.getTimeSlot(day.hour(12).minutes(0)),
      this.getTimeSlot(day.hour(13).minutes(0)),
      this.getTimeSlot(day.hour(14).minutes(0)),
      this.getTimeSlot(day.hour(15).minutes(0)),
      this.getTimeSlot(day.hour(16).minutes(0)),
    ];
    if (day.day() === 1 || day.day() === 3) {
      slots = [...slots,
        this.getTimeSlot(day.hour(17).minutes(0)),
        this.getTimeSlot(day.hour(18).minutes(0)),
        this.getTimeSlot(day.hour(19).minutes(0)),
        this.getTimeSlot(day.hour(20).minutes(0)),
      ];
    }
    return slots;

  }


  getTimeSlot(time) {
    return {
      date: time.format(),
      label: time.format('HH:mm'),
      available: this.isTimeAvailable(time),
    };

  }


  isTimeAvailable(time) {
    return time.isAfter(moment()) && !bookedData[time.format('YYYY-MM-DDTHH:mm')];
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
    let startDay = moment().week(this.selectedWeek);
    if (startDay.day() === 6) {
      startDay = startDay.add(1, 'days');
    }
    this.timeSlots = this.getDays(startDay);
  }
}
