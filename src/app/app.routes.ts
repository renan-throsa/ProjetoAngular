import { EntryComponent } from './registration/entry/entry.component';
import { AboutComponent } from './institution/about/about.component';
import { ContactComponent } from './institution/contact/contact.component';
import { HomeComponent } from './navigation/home/home.component';
import { Routes } from "@angular/router";
import { ProductsListComponent } from './products/products-list/products-list.component';

export const rootRoutesConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contato', component: ContactComponent },
    { path: 'sobre', component: AboutComponent },
    { path: 'produto', component: ProductsListComponent },
    { path: 'produto-detail/:id', component: ProductsListComponent },
    { path: 'cadastro', component: EntryComponent },
];