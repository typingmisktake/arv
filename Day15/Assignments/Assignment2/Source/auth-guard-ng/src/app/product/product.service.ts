import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Product {
  title: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productList: Product[] = [
    {
      title: 'Product1',
      price: 250,
    },
    {
      title: 'Product2',
      price: 15,
    },
  ];
  constructor() {}

  create(newProduct: Product) {
    this.productList.push(newProduct);
  }

  update(index: number, update: Product) {
    this.productList[index] = update;
    return this.productList[index];
  }

  delete(index: number) {
    this.productList.splice(index, 1);
  }

  public products(): Observable<Product[]> {
    return new Observable((observer) => {
      observer.next(this.productList);
    });
  }
}
