import {Component, OnInit} from '@angular/core';
import {LoginFormData} from '../login-form-data';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

interface LoginResult {
  result: boolean;
  token?: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private formModel: LoginFormData = new LoginFormData('', '');
  submitted = false;
  public error = '';
  constructor(private cookieService: CookieService,
              private router: Router) {
  }

  ngOnInit() {
  }


  onSubmit() {
    this.error = '';
    return fetch('http://localhost:4000/session/login?login='
      + this.formModel.login
      + '&password=' + this.formModel.password
    )
      .then(response => response.json())
      .then((r: LoginResult) => {
          if (r.result === true) {
            this.cookieService.set('token', r.token, null, '/');
            this.submitted = true;
            this.router.navigate(['/admin']);
          } else {
            this.error = 'Login failed: Login or password is incorrect.';
            this.submitted = false;
          }
        }
      );
  }

}
