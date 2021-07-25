import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styles: [
  ]
})
export class ProductsListComponent implements OnInit {

  produtos: Array<Product>;

  constructor(private _route: ActivatedRoute) {
    this.produtos = new Array<Product>();
  }

  ngOnInit(): void {
    this._route.data.subscribe((response: any) => {
      this.produtos = response.produtos;
    })
    /*
    this._service.getProducts().subscribe(
      (products) => { this.produtos = products },
      (error) => { console.log(error) }
    )
    */
  }

  changeSatus(p: Product) {
    p.ativo = !p.ativo;
  }

}
