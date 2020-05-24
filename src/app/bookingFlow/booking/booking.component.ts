import { Component, OnInit } from '@angular/core';
import * as Phone from '../../components/contact/assets/headphones.png';
import moment from "moment";
import BookingService from './booking.service';
import {bookedData} from '../bookingdata';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css', '../../components/contact/contact.component.css']
  })
export class BookingComponent implements OnInit {
  public phone: string = Phone.default;

  public timeSlots: object = [];

  constructor(private bookingService: BookingService) {
  }

  ngOnInit() {
    let startDay = moment();
    if ( startDay.day() === 6 ) {
      startDay = startDay.add(1, 'days');
    }
    this.timeSlots = this.getDays(startDay);
  }

  getDays(thisDay) {

    return [
      {
        //  Monday
        day: thisDay.day(1).format('DD MMM'),
        slots: this.getTimes(thisDay.day(1))
      },
      {
        //  Tuesday
        day: thisDay.day(2).format('DD MMM'),
        slots: this.getTimes(thisDay.day(2))
      },
      {
        //  Wednesday
        day: thisDay.day(3).format('DD MMM'),
        slots: this.getTimes(thisDay.day(3))
      },
      {
        //  Thursday
        day: thisDay.day(4).format('DD MMM'),
        slots: this.getTimes(thisDay.day(4))
      },
      {
        //  Friday
        day: thisDay.day(5).format('DD MMM'),
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
    if ( day.day() === 1 || day.day() === 3) {
      slots = [...slots,
        this.getTimeSlot(day.hour(17).minutes(0)),
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
    return time.isAfter(moment()) && !bookedData[time.format('YYYY-MM-DDTHH:mm')] ;
  }
}
