import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ProductService } from './product.service';

import { Product } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private ps: ProductService, private as: AuthService) {}

  ngOnInit(): void {
    this.ps.products().subscribe((products: Product[]) => {
      this.products = products;
    });
  }
}
