import { Component } from '@angular/core';

interface User {
  name: string;
  address: string;
  pan: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  user: User = {
    name: '',
    address: '',
    pan: '',
  };
  paragraph: string = '';

  register() {
    if (
      this.user.name === '' &&
      this.user.address === '' &&
      this.user.pan === ''
    ) {
      alert('Enter valid values');
      return;
    }
    this.paragraph = `${this.user.name} lives in ${this.user.address} and his PAN number is ${this.user.pan}.`;
  }
}
