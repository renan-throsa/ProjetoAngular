import { NewProductComponent } from './new-product/new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductResolve } from './product.resolve';

const productRouterConfig: Routes = [
    { path: '', component: ProductsListComponent },
    { path: ':estado', component: ProductsListComponent, resolve: { produtos: ProductResolve } },
    { path: 'editar/:id', component: EditProductComponent },
    { path: 'new', component: NewProductComponent }
]

@NgModule({
    imports: [RouterModule.forChild(productRouterConfig)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }