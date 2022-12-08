import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  key: string = '';
  isLoggedIn: boolean = false;

  login() {
    if (this.username !== 'admin' || this.key !== 'admin') {
      alert('Invalid username or password');
      return;
    }
    this.isLoggedIn = true;
  }

  logout() {
    this.username = '';
    this.key = '';
    this.isLoggedIn = false;
  }
}
