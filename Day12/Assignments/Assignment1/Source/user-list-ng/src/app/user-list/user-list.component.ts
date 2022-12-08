import { Component } from '@angular/core';

export interface User {
  userID: number;
  userName: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: [],
})
export class UserListComponent {
  userList: User[] = [
    { userID: 1, userName: 'Roy' },
    { userID: 2, userName: 'Rohit' },
  ];
}
