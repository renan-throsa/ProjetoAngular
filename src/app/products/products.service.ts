import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  protected _urlService: string = 'http://localhost:3000/';
  constructor(private _http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(this._urlService + 'produtos')
  }
}
