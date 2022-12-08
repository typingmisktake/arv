import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styles: [],
})
export class ErrorMessageComponent {
  @Input() field!: FormControl;
  @Input() fieldName!: string;
}
