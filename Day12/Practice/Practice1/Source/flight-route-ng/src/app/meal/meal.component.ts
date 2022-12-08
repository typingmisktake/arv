import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
})
export class MealComponent implements OnInit {
  selected!: number;

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe((params: ParamMap) => {
      this.selected = +params.get('id')!;
      console.log(this.selected);
    });
  }
}
