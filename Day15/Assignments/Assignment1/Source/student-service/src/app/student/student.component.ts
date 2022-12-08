import { Component, Input } from '@angular/core';
import { StudentService } from '../student.service';
import Student from 'src/models/Student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styles: [],
})
export class StudentComponent {
  @Input() student!: Student;
  isEditing: boolean = false;
  updateForm = {
    firstName: '',
    lastName: '',
  };
  constructor(private ss: StudentService) {}

  handleDelete() {
    this.ss.delete(this.student.id);
  }

  handleUpdate() {
    this.student = this.ss.update({
      id: this.student.id,
      firstName: this.updateForm.firstName,
      lastName: this.updateForm.lastName,
    });
    this.toggleEditing();
  }

  toggleEditing() {
    this.isEditing = !this.isEditing;
    if (this.isEditing) {
      this.updateForm.firstName = this.student.firstName;
      this.updateForm.lastName = this.student.lastName;
    }
  }
}
