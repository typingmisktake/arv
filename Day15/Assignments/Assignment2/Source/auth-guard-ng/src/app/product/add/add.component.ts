import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent {
  constructor(private fb: FormBuilder, private ps: ProductService) {}

  productForm = this.fb.group({
    title: ['', Validators.required],
    price: ['', Validators.required],
  });

  onSubmit() {
    if (!this.productForm.valid) return;
    this.ps.create({
      title: this.productForm.value.title as string,
      price: parseInt(this.productForm.value.price as string),
    });
    this.productForm.reset();
  }
}
