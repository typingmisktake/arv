import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Product, ProductService } from '../product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styles: [],
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  @Input() index!: number;
  isEditing: boolean = false;
  updateForm!: FormGroup;

  constructor(private as: AuthService, private ps: ProductService) {}
  get isAdmin() {
    return this.as.isAdmin();
  }

  delete(index: number) {
    this.ps.delete(index);
  }

  toggleEditing() {
    this.isEditing = !this.isEditing;
    if (this.isEditing) {
      this.updateForm.get('title')?.enable();
      this.updateForm.get('price')?.enable();
    } else {
      this.updateForm.setValue(this.product);
      this.updateForm.get('title')?.disable();
      this.updateForm.get('price')?.disable();
    }
  }

  update() {
    if (!this.updateForm.valid) return;
    this.updateForm.setValue(
      this.ps.update(this.index, {
        title: this.updateForm.value?.title as string,
        price: parseInt(this.updateForm.value?.price as string),
      })
    );
  }

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      title: new FormControl(
        { value: this.product.title, disabled: true },
        Validators.required
      ),
      price: new FormControl(
        { value: this.product.price, disabled: true },
        Validators.required
      ),
    });
  }
}
