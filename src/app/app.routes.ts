import { NotFoundComponent } from './navigation/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { EntryComponent } from './registration/entry/entry.component';
import { AboutComponent } from './institution/about/about.component';
import { ContactComponent } from './institution/contact/contact.component';
import { HomeComponent } from './navigation/home/home.component';
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from './services/app.guard';

const rootRoutesConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contato', component: ContactComponent },
    { path: 'sobre', component: AboutComponent },
    { path: 'cadastro', component: EntryComponent },
    {
        path: 'produtos',
        loadChildren: () => import('./products/product.module').then(m => m.ProductModule)
    },
    {
        path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard]
    },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(rootRoutesConfig)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}