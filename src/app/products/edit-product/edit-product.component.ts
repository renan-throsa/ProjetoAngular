import { ProductsService } from './../products.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styles: [
  ]
})
export class EditProductComponent implements OnInit {

  produto: Product;
  constructor(private _route: ActivatedRoute, private _router: Router, private _service: ProductsService) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this._service.getProduct(params['id']).subscribe(p => { this.produto = p })
    })
  }

  salvar() {
    this._router.navigate(['/produtos'])
  }

}
