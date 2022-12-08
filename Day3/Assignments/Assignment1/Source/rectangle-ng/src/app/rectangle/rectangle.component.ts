import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css'],
})
export class RectangleComponent {
  length: any;
  width: any;
  area: number = 0;

  calculate = (e: SubmitEvent) => {
    e.preventDefault();
    this.area = this.length * this.width;
  };
}
