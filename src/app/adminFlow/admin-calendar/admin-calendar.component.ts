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
  date: moment.Moment;
  label: string;
  available: boolean;
  booking?: Booking;
}

export class DisplayBookingSlotImpl implements DisplayBookingSlot {
  constructor(public date: moment.Moment,
              public label: string,
              public available: boolean,
              public booking: Booking) {
  }
}

export interface DaySchedule {
  dayDate: string;
  day?: string;
  weekday?: string;
  slots: DisplayBookingSlot[];
}

export class DayScheduleImpl implements DaySchedule {
  constructor(
    public day: string,
    public dayDate: string,
    public slots: DisplayBookingSlot[],
    public weekday: string) {}
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
    this.bookingService.clearBooking();
    this.currentWeek = this.selectedWeek = moment().week();

    this.adminToken = this.cookieService.get('token');

    this.updateWeekView();
  }

  getDays(days): DaySchedule[] {
    const format = 'dddd, DD MMM';
    return days.map(dayObject => {
      return {
        day: moment(dayObject.dayDate).locale('sv-SE').format(format).toUpperCase(),
        slots: this.getTimes(dayObject.dayDate, dayObject.slots),
      };
    });
  }

  getTimes(date: moment.Moment, slots: AdminBookingSlot[]): DisplayBookingSlot[] {
    const dayStart = moment(date);
    return slots.map((slot: AdminBookingSlot) => {
      const time: moment.Moment = moment(dayStart).add(slot.hour, 'h');
      return new DisplayBookingSlotImpl(
        time,
        moment(time).format('HH:mm'),
        this.isTimeAvailable(time) && slot.available,
        slot.booking,
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
    this.bookingService.getBookingsAdmin(this.selectedWeek, this.adminToken)
      .then(json => {
        if (json.result === 'badsession') {
          this.router.navigate(['/admin/login']);
        } else {
          this.timeSlots = this.getDays(json.result);
        }
      });
  }

  onCancel(code) {
    this.bookingService.cancelAppointment(code).then(response => {
      if (response.result) {
        this.updateWeekView();
      }
    });
  }
}
