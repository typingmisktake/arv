import { Injectable } from '@angular/core';
import Student from 'src/models/Student';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  nextId: number = 1;
  students: Student[] = [];

  constructor(private logger: LoggerService) {
    this.insert({
      firstName: 'John',
      lastName: 'Doe',
    });
  }

  insert(student: { firstName: string; lastName: string }) {
    this.students.push({ ...student, id: this.nextId++ });
    this.logger.log('Created', student);
  }

  delete(id: number) {
    const deleted = this.students.splice(
      this.students.findIndex((student) => student.id === id),
      1
    );
    this.logger.log('Deleted', deleted);
    return deleted;
  }

  update(update: Student) {
    const index = this.students.findIndex(
      (student) => student.id === update.id
    );
    this.students[index] = update;
    this.logger.log('Updated', update);
    return this.students[index];
  }
}
