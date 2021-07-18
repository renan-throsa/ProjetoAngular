import { NgModule } from '@angular/core';
import { EntryComponent } from './registration/entry/entry.component';
import { AboutComponent } from './institution/about/about.component';
import { ContactComponent } from './institution/contact/contact.component';
import { HomeComponent } from './navigation/home/home.component';
import { RouterModule, Routes } from "@angular/router";
import { ProductsListComponent } from './products/products-list/products-list.component';

const rootRoutesConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contato', component: ContactComponent },
    { path: 'sobre', component: AboutComponent },
    { path: 'produto', loadChildren: () => import('./products/product.module').then(m => m.ProductModule) },
    { path: 'cadastro', component: EntryComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(rootRoutesConfig)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}