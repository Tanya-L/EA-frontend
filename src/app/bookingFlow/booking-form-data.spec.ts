import {BookingFormData} from './booking-form-data';

describe('BookingFormData', () => {
  it('should create an instance', () => {
    expect(new BookingFormData('', '', '', '')).toBeTruthy();
  });
});
