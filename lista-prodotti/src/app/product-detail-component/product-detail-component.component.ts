import { Component, Input, OnInit } from '@angular/core';

interface Product {
  name: string;
  price: number;
  description: string;
  }
@Component({
  selector: 'app-product-detail-component',
  imports: [],
  templateUrl: './product-detail-component.component.html',
  styleUrl: './product-detail-component.component.css'
})
export class ProductDetailComponentComponent implements OnInit{

  

 @Input() product: Product;
 @Input() active: boolean;
    constructor(){
    }
    ngOnInit(){}
}
