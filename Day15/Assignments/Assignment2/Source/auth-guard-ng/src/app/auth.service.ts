import { Injectable } from '@angular/core';

interface User {
  username: string;
  key: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: User[] = [
    { username: 'user', key: 'user' },
    { username: 'admin', key: 'admin' },
  ];

  isLoggedIn(): boolean {
    if (localStorage.getItem('user')) return true;
    return false;
  }

  isAdmin(): boolean {
    if (
      this.isLoggedIn() &&
      JSON.parse(localStorage.getItem('user') as string).user === 'admin'
    )
      return true;
    return false;
  }

  login(user: User) {
    if (
      this.users.find(
        (value) => user.username === value.username && user.key === value.key
      )
    ) {
      localStorage.setItem('user', JSON.stringify({ user: user.username }));
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('user');
  }
}
