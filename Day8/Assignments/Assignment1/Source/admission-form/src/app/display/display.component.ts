import { Component, Input } from '@angular/core';

export interface Application {
  name: {
    first: string;
    middle: string;
    last: string;
  };
  placeOfBirth: string;
  address: {
    city: string;
    country: string;
    pin: string;
    state: string;
  };
  father: {
    name: {
      first: string;
      middle: string;
      last: string;
    };
    designation: string;
    education: string[];
    email: string;
    phone: string;
    profession: string;
    qualification: string;
  };
  mother: {
    name: {
      first: string;
      middle: string;
      last: string;
    };
    designation: string;
    education: string[];
    email: string;
    phone: string;
    profession: string;
    qualification: string;
  };
  dateOfBirth: string;
  firstLanguage: string;
}

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styles: [],
})
export class DisplayComponent {
  @Input() applications!: Application[];

  join(object: object, separator: string = ' '): string {
    return Object.values(object).join(separator);
  }
}
