import { Component, Input } from '@angular/core';

export interface Product {
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: [],
})
export class ProductComponent {
  @Input() product: Product = {
    name: '',
    price: 0,
    quantity: 0,
  };

  get gross(): number {
    return this.product.price * this.product.quantity;
  }

  get discount(): number {
    return parseInt((this.gross * 0.05).toFixed(2));
  }

  get total(): number {
    return parseInt((this.gross - this.discount).toFixed(2));
  }
}
