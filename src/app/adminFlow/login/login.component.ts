import {Component, OnInit} from '@angular/core';
import {LoginFormData} from '../login-form-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private formModel: LoginFormData = new LoginFormData('', '');
  submitted = false;

  constructor() {
  }

  ngOnInit() {
  }


  onSubmit() {
    this.submitted = true;

    return fetch('http://localhost:4000/session/login?login='
      + this.formModel.login
      + '&password=' + this.formModel.password
    )
      .then(response => {
        //TODO проверить что вернул сервер, проверить ответ json
        console.log(response.json());
        }
      );
  }

}
