import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styles: [],
})
export class StudentFormComponent {
  studentForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
  });

  constructor(private ss: StudentService) {}

  handleSubmit() {
    this.ss.insert({
      firstName: this.studentForm.value.firstName as string,
      lastName: this.studentForm.value.lastName as string,
    });
    this.studentForm.reset();
  }
}
