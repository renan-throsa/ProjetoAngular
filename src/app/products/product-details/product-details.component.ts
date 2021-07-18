import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styles: [
  ]
})
export class ProductsDetailsComponent implements OnInit {

  @Input() produto: Product;

  constructor() {

  }

  ngOnInit(): void {

  }

}
