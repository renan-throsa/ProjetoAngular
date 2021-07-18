import { ProductsDetailsComponent } from './product-details/product-details.component';
import { ProductRoutingModule } from './products-routes.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [ProductsListComponent, ProductsDetailsComponent],
    imports: [CommonModule, ProductRoutingModule],
    exports: []
})
export class ProductModule { }