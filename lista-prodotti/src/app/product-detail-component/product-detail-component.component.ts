import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-product-detail-component',
  imports: [],
  templateUrl: './product-detail-component.component.html',
  styleUrl: './product-detail-component.component.css'
})
export class ProductDetailComponentComponent {
  interface Product {
    name: string;
    price: number;
    description: string;
    }

 @Input() product: Product;
}
