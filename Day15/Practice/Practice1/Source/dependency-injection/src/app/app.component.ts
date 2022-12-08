import { Component } from '@angular/core';
import { GreetingService } from './greeting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'dependency-injection';
  greeting!: string;

  constructor(private gs: GreetingService) {
    this.greeting = this.gs.greeting();
  }
}
