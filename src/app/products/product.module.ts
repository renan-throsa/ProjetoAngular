import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductsDetailsComponent } from './product-details/product-details.component';
import { ProductsCountComponent } from './product-details/product-count.component';
import { ProductRoutingModule } from './products-routes.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NewProductComponent } from './new-product/new-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductResolve } from './services/product.resolve';
import { ProductsService } from './services/products.service';
import { ProductAppComponent } from './product.app.component';


@NgModule({
    declarations: [
        ProductsListComponent,
        ProductsDetailsComponent,
        ProductsCountComponent,
        EditProductComponent,
        NewProductComponent,
        ProductAppComponent
    ],

    imports: [
        CommonModule,
        ProductRoutingModule,
        FormsModule,
        ReactiveFormsModule 
    ],
    providers: [
        ProductsService,
        ProductResolve
    ],
    exports: []
})
export class ProductModule { }