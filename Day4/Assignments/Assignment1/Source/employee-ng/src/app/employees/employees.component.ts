import { Component } from '@angular/core';

interface Employee {
  id?: number;
  name: string;
  address: string;
  gender: string;
  doj: string;
  hobbies: string;
}

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styles: [],
})
export class EmployeesComponent {
  employees: Employee[] = [
    {
      id: 1,
      name: 'Sufyan',
      address: 'Ahmedabad',
      gender: 'Male',
      doj: '2022/08/01',
      hobbies: 'Music, Gaming',
    },
    {
      id: 2,
      name: 'Ruchit',
      address: 'Ahmedabad',
      gender: 'Male',
      doj: '2022/08/01',
      hobbies: 'Music, Gaming',
    },
    {
      id: 3,
      name: 'Vikas',
      address: 'Himmat Nagar',
      gender: 'Male',
      doj: '2022/08/01',
      hobbies: 'Music, Gaming',
    },
    {
      id: 4,
      name: 'John Doe',
      address: 'New York',
      gender: 'Male',
      doj: '2022/11/1',
      hobbies: 'Traveling',
    },
  ];
  form: Employee = {
    id: undefined,
    name: '',
    address: '',
    gender: '',
    doj: '',
    hobbies: '',
  };

  handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    this.employees.push({ ...this.form });
  }

  sort() {
    this.employees.sort((a, b) => a.name.localeCompare(b.name));
  }

  filterByDoj() {
    this.employees = this.employees.filter(
      (emp) => new Date(emp.doj).getMonth() === new Date().getMonth()
    );
  }
}
