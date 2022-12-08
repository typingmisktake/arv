import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Application } from './display/display.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  applications: Application[] = [];

  admissionForm = this.fb.group({
    name: this.fb.group({
      first: this.fb.control('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      middle: ['', [Validators.minLength(3)]],
      last: ['', [Validators.required, Validators.minLength(3)]],
    }),
    dateOfBirth: [''],
    placeOfBirth: [''],
    firstLanguage: [''],
    address: this.fb.group({
      city: [''],
      state: [''],
      country: [''],
      pin: [''],
    }),
    father: this.fb.group({
      name: this.fb.group({
        first: ['', [Validators.required, Validators.minLength(3)]],
        middle: ['', [Validators.minLength(3)]],
        last: ['', [Validators.required, Validators.minLength(3)]],
      }),
      email: ['', [Validators.required, Validators.email]],
      education: this.fb.array(['', ''], [Validators.required]),
      qualification: [''],
      profession: [''],
      designation: ['', Validators.required],
      phone: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
    }),
    mother: this.fb.group({
      name: this.fb.group({
        first: ['', [Validators.required, Validators.minLength(3)]],
        middle: ['', [Validators.minLength(3)]],
        last: ['', [Validators.required, Validators.minLength(3)]],
      }),
      email: ['', [Validators.required, Validators.email]],
      education: this.fb.array(['', ''], [Validators.required]),
      qualification: [''],
      profession: [''],
      designation: ['', Validators.required],
      phone: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
    }),
  });

  constructor(private fb: FormBuilder) {}

  handleSubmit() {
    console.log(this.applications);
    if (this.admissionForm.valid)
      this.applications.push(this.admissionForm.value as Application);
  }

  addEducation(isFather: boolean) {
    if (isFather) {
      (this.admissionForm.get('father.education') as FormArray).push(
        this.fb.control('')
      );
    }
  }

  removeEducation(parent: string, index: number) {
    (this.admissionForm.get(parent + '.education') as FormArray).removeAt(
      index
    );
  }

  fillForm() {
    this.admissionForm.patchValue({
      name: {
        first: 'Sufyan',
        middle: 'Taufiq',
        last: 'Mansuri',
      },
      placeOfBirth: 'Ahmedabad',
      address: {
        city: 'Ahmedabad',
        country: 'India',
        pin: '381234',
        state: 'Gujarat',
      },
      father: {
        name: {
          first: 'Taufiq',
          middle: 'Rafiq',
          last: 'Mansuri',
        },
        designation: 'Something',
        education: ['Hello', 'World'],
        email: 'abc@asd.com',
        phone: '1234567890',
        profession: 'asdasd',
        qualification: 'asdasd',
      },
      mother: {
        name: {
          first: 'Zaibun',
          middle: 'Taufiq',
          last: 'Mansuri',
        },
        designation: 'Something',
        education: ['Hello', 'World'],
        email: 'abc@asd.com',
        phone: '1234567890',
        profession: 'asdasd',
        qualification: 'asdasd',
      },
      dateOfBirth: '2000-10-26',
      firstLanguage: 'Hindi',
    });
  }

  educationFormArray(parent: string) {
    if (parent === 'father')
      return this.admissionForm.controls.father.controls.education as FormArray;
    else
      return this.admissionForm.controls.mother.controls.education as FormArray;
  }

  field(path: string) {
    return this.admissionForm.get(path) as FormControl;
  }

  getFormControl(item: AbstractControl) {
    return item as FormControl;
  }
}
