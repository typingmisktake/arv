import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'atoz';
  displayAlphabets: boolean = false;

  toggle() {
    this.displayAlphabets = this.displayAlphabets ? false : true;
    console.log(this.displayAlphabets);
  }
}
