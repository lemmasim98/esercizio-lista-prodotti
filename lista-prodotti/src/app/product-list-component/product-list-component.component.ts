import { Component } from '@angular/core';
import { ProductDetailComponentComponent } from '../product-detail-component/product-detail-component.component';
import { Product } from '../product';

@Component({
  selector: 'app-product-list-component',
  imports: [ProductDetailComponentComponent],
  templateUrl: './product-list-component.component.html',
  styleUrl: './product-list-component.component.css'
})

// interface Products extends Array<Product>{}

export class ProductListComponentComponent {
  products: Product[];
  active: boolean;
  constructor(){
    this.products = [
      { name: 'nome', price: 7, description: 'contentId' },
      { name: 'nome', price: 7, description: 'contentId' },
    ];
    this.active = false;
  }
    
}
