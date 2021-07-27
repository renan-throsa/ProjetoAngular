import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable()
export class ProductsService {

  protected _urlService: string = 'http://localhost:3000/';
  constructor(private _http: HttpClient) {
  }

  getProducts(promo: string = ''): Observable<Product[]> {
    if (promo === 'ativos') {
      return this._http.get<Product[]>(this._urlService + 'produtos?ativo=true');
    }    
    return this._http.get<Product[]>(this._urlService + 'produtos');
  }

  getProduct(id: number): Observable<Product> {
    console.log(this._urlService + 'produtos' + id);
    return this._http.get<Product>(this._urlService + 'produtos/' + id);
  }
}
