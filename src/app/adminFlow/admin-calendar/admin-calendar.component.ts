import {Component, OnInit} from '@angular/core';
import BookingService from '../../bookingFlow/booking/booking.service';
import {bookedData} from '../../bookingFlow/bookingdata';
import moment from 'moment';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

export interface Booking {
  isActive: boolean;
  name: string;
  phone: string;
  comments: string;
  bookingCode: string;
}

// Comes from server API for each booking hour
export interface AdminBookingSlot {
  available: boolean;
  hour: number;
  booking: Booking;
}

// Comes to the HTML template after processing AdminBookingSlot's
export interface DisplayBookingSlot {
  date: string;
  label: string;
  available: boolean;
  booking?: Booking;
}

export interface DaySchedule {
  dayDate: string;
  day?: string;
  slots: AdminBookingSlot[];
}

@Component({
  selector: 'app-admin-calendar',
  templateUrl: './admin-calendar.component.html',
  styleUrls: ['./admin-calendar.component.css', '../../bookingFlow/booking/booking.component.css']
})
export class AdminCalendarComponent implements OnInit {
  public timeSlots: DaySchedule[] = [];
  slots: any;
  currentWeek: number;
  selectedWeek: number;
  public weekTimeSlots = [];
  private adminToken: string;

  constructor(private bookingService: BookingService,
              private cookieService: CookieService,
              private router: Router) {
  }

  ngOnInit() {
    this.currentWeek = this.selectedWeek = moment().week();

    this.adminToken = this.cookieService.get('token');

    this.updateWeekView();
  }

  getDays(days): DaySchedule[] {
    const format = 'dddd, DD MMM';
    return days.map(dayObject => {
      return {
        day: moment(dayObject.dayDate).format(format),
        slots: this.getTimes(dayObject.dayDate, dayObject.slots),
      };
    });
  }

  getTimes(date: moment.Moment, slots: AdminBookingSlot[]): DisplayBookingSlot[] {
    const day = moment(date);
    return slots.map((slot: AdminBookingSlot) => {
      const time = day.hour(slot.hour).minutes(0).utc(true);
      return {
        date: time.format(),
        label: time.format('HH:mm'),
        available: this.isTimeAvailable(time) && slot.available,
        booking: slot.booking,
      };
    });
  }


  // getTimeSlot(time) {
  //   return {
  //     date: time.format(),
  //     label: time.format('HH:mm'),
  //     available: this.isTimeAvailable(time),
  //   };
  //
  // }


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
    this.bookingService.getBookingsAdmin(this.selectedWeek, this.adminToken)
      .then(json => {
        if (json.result === 'badsession') {
          this.router.navigate(['/admin/login']);
        } else {
          this.timeSlots = this.getDays(json.result);
        }
      });
  }
}
