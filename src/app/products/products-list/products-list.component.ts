import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styles: [
  ]
})
export class ProductsListComponent implements OnInit {

  produtos: Array<Product>;

  constructor(private _productsService: ProductsService) {
    this.produtos = new Array<Product>();
  }

  ngOnInit(): void {
    this._productsService.getProducts().subscribe(
      (products) => { this.produtos = products; console.log(this.produtos) },
      (error) => { console.log(error) }
    )
  }

}
