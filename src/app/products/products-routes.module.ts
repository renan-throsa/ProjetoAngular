import { ProductAppComponent } from './product.app.component';
import { NewProductComponent } from './new-product/new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductResolve } from './services/product.resolve';

const productRouterConfig: Routes = [
    {
        path: '', component: ProductAppComponent, children: [
            { path: '', redirectTo: 'todos' },
            { path: ':estado', component: ProductsListComponent, resolve: { produtos: ProductResolve } },
            { path: 'editar/:id', component: EditProductComponent },
            { path: 'new', component: NewProductComponent }
        ]
    },

]

@NgModule({
    imports: [RouterModule.forChild(productRouterConfig)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }