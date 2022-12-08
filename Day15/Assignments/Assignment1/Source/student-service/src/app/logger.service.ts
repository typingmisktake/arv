import { Injectable } from '@angular/core';
import Student from 'src/models/Student';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  log(...messages: any) {
    console.log(...messages);
  }
}
