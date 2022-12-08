import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'auth-guard-ng';

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private as: AuthService, private router: Router) {}

  get isLoggedIn() {
    return this.as.isLoggedIn();
  }

  get isAdmin() {
    return this.as.isAdmin();
  }

  onLogin() {
    if (!this.loginForm.valid) return;
    if (
      this.as.login({
        username: this.loginForm.value.username as string,
        key: this.loginForm.value.password as string,
      })
    ) {
      this.loginForm.reset();
      alert('Login Successful');
    } else {
      alert('Invalid username or password.');
    }
  }

  onLogout() {
    this.as.logout();
    this.router.navigate(['/']);
  }
}
