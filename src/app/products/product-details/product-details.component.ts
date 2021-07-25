import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styles: [
  ]
})
export class ProductsDetailsComponent {

  @Input()
  produto: Product;

  @Output()
  status: EventEmitter<Product>;

  constructor() {
    this.status = new EventEmitter<Product>();
  }
  emitirEvento() {
    this.status.emit(this.produto)
  }

}
