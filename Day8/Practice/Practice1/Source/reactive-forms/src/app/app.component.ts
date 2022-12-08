import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  hobbies = ['Cricket', 'Tennis'];

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
    }),
    gender: ['', Validators.required],
    hobbies: this.fb.array([]),
  });
  newHobby = this.fb.control('', Validators.required);

  constructor(private fb: FormBuilder) {}

  setAddress() {
    this.profileForm.patchValue({
      firstName: 'Sufyan',
      address: {
        city: 'Ahmedabad',
      },
    });
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  get hobbiesFormArray() {
    return this.profileForm.controls.hobbies as FormArray;
  }

  handleCheckbox(e: any) {
    const hobbies: FormArray = this.profileForm.get('hobbies') as FormArray;
    if (e.target.checked) {
      hobbies.push(new FormControl(e.target.value));
    } else {
      let i: number = hobbies.controls.findIndex(
        (item: any) => item.value == e.target.value
      );
      hobbies.removeAt(i);
    }
  }

  addHobby() {
    const newHobby: any = this.newHobby.value;
    if (!this.hobbies.includes(newHobby)) this.hobbies.push(newHobby);
    this.newHobby.setValue('');
  }
}
