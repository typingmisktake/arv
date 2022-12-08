import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
interface User {
  userID: number;
  userName: string;
  gender: string;
  designation: string;
  panNumber: string;
}

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [],
})
export class UserDetailsComponent implements OnInit {
  selected!: number;

  userDetails: User[] = [
    {
      userID: 1,
      userName: 'Roy',
      gender: 'Male',
      designation: 'Developer',
      panNumber: '335454',
    },
    {
      userID: 2,
      userName: 'Rohit',
      gender: 'Male',
      designation: 'Junior Developer',
      panNumber: 'abcd',
    },
  ];

  constructor(private router: ActivatedRoute) {}

  selectedUser() {
    return this.userDetails.find((user) => user.userID == this.selected);
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe((params: ParamMap) => {
      this.selected = +params.get('id')!;
    });
  }
}
