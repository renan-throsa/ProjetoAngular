import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styles: [
  ]
})
export class NewProductComponent implements OnInit {

  entryForm: FormGroup;
  produto: Product;

  constructor(private _fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.entryForm = this._fb.group({
      nome: ['', Validators.required],
      valor: ['', [Validators.required]],
      promocao: ['', [Validators.required]],
      valorPromo: ['', [Validators.required]],
      imagem: ['', [Validators.required]],
      ativo: ['', [Validators.required]]
    });
  }

  addProduct() {
    this.produto = Object.assign({}, this.produto, this.entryForm.value)
    console.log(this.produto)
  }
}
