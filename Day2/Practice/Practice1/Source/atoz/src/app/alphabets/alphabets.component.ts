import { Component } from '@angular/core';

@Component({
  selector: 'app-alphabets',
  templateUrl: './alphabets.component.html',
})
export class AlphabetsComponent {
  alphabets: string[] = [];

  constructor() {
    for (let i = 65; i < 91; i++) {
      this.alphabets.push(String.fromCharCode(i));
    }
  }
}
