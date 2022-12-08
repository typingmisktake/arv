import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

interface Food {
  id: number;
  item: string;
}

@Component({
  selector: 'app-ind-usa',
  templateUrl: './ind-usa.component.html',
})
export class IndUsaComponent {
  constructor(private router: ActivatedRoute, private route: Router) {}

  viaAtlantic() {
    this.route.navigate(['atlantic'], { relativeTo: this.router });
  }

  viaPacific() {
    this.route.navigate(['pacific'], { relativeTo: this.router });
  }

  AtlanticMenu: Food[] = [
    { id: 1, item: 'Kosher Meal' },
    { id: 2, item: 'Moslem Meal' },
    { id: 3, item: 'Vegetarian Meal' },
    { id: 4, item: 'Asian Meal' },
  ];

  PacificMenu: Food[] = [
    { id: 1, item: 'SeaFood Meal' },
    { id: 2, item: 'Lacto Ovo Veg Meal' },
    { id: 3, item: 'Bland Meal' },
    { id: 4, item: 'Fruit Meal' },
  ];

  atlanticMenu(id: number) {
    this.route.navigate(['atlantic', id], { relativeTo: this.router });
  }

  pacificMenu(id: number) {
    this.route.navigate(['pacific', id], { relativeTo: this.router });
  }
}
