import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'template-form-fede';

  public data = false

  public login: LoginFormBig = {
    email: '',
    password: '',
    repassword:'',
    adress: '',
    postalCode: '', 
    celPhoneNumber: ''
  }
  public onSubmit() {
    console.log('data enviada')
    this.data = true
  }
}

interface LoginFormBig{
  email: string,
  password: string,
  repassword: string,
  adress: string,
  postalCode: string, 
  celPhoneNumber: string
}