import { Component } from '@angular/core';
import Student from 'src/models/Student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'student-service';
  students: Student[] = [];
  constructor(private ss: StudentService) {
    this.students = ss.students;
  }
}
