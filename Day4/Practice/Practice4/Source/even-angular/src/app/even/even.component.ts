import { Component } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css'],
})
export class EvenComponent {
  evenNumbers: number[] = [];
  constructor() {
    for (let i = 1; i <= 100; i++) {
      if (i % 2 === 0) this.evenNumbers.push(i);
    }
  }
}
