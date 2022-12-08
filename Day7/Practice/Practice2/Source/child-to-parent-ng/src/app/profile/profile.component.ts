import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [],
})
export class ProfileComponent {
  @Output() nameChange = new EventEmitter<string>();

  emitEvent(name: string) {
    this.nameChange.emit(name);
  }
}
