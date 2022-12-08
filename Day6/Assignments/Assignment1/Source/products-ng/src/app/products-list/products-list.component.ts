import { Component } from '@angular/core';
import { Product } from '../product/product.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styles: [],
})
export class ProductsListComponent {
  products: Product[] = [
    {
      name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      quantity: 4,
    },
    {
      name: 'Mens Casual Premium Slim Fit T-Shirts ',
      price: 22.3,
      quantity: 5,
    },
    {
      name: 'Mens Cotton Jacket',
      price: 55.99,

      quantity: 6,
    },
    {
      name: 'Mens Casual Slim Fit',
      price: 15.99,
      quantity: 7,
    },
    {
      name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      quantity: 1,
    },
    {
      name: 'Solid Gold Petite Micropave ',
      price: 168,
      quantity: 6,
    },
    {
      name: 'White Gold Plated Princess',
      price: 9.99,
      quantity: 3,
    },
    {
      name: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
      price: 10.99,
      quantity: 8,
    },
    {
      name: 'WD 2TB Elements Portable External Hard Drive - USB 3.0 ',
      price: 64,
      quantity: 4,
    },
    {
      name: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
      price: 109,
      quantity: 8,
    },
  ];
}
