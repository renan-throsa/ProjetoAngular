import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { ProductsListComponent } from './products-list/products-list.component';

const productRouterConfig: Routes = [
    { path: '', component: ProductsListComponent }
]

@NgModule({
    imports: [RouterModule.forChild(productRouterConfig)],
    exports: [RouterModule]
})
export class ProductRoutingModule {

}