import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Product } from "./product";
import { ProductsService } from "./products.service";

@Injectable()
export class ProductResolve implements Resolve<Product[]> {

    constructor(private _service: ProductsService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Product[]> {
        console.log(route.params.estado)
        return this._service.getProducts(route.params.estado);
    }

}