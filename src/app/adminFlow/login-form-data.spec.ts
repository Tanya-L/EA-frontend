import { LoginFormData } from './login-form-data';

describe('LoginFormData', () => {
  it('should create an instance', () => {
    expect(new LoginFormData('', '')).toBeTruthy();
  });
});
