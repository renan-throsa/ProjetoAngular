import { ProductRoutingModule } from './products-routes.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [ProductsListComponent],
    imports: [CommonModule, ProductRoutingModule],
    exports: []
})
export class ProductModule { }