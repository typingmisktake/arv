import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  name: string = '';

  handleNameChange(name: string) {
    this.name = name;
  }
}
