import { rootRoutesConfig } from './app.routes';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './navigation/menu/menu.component';
import { HomeComponent } from './navigation/home/home.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { AboutComponent } from './institution/about/about.component';
import { ContactComponent } from './institution/contact/contact.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { EntryComponent } from './registration/entry/entry.component';

import { NgBrazil } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { CustomFormsModule } from 'ng2-validation';

registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    ProductsListComponent,
    EntryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    CustomFormsModule,
    NgBrazil,
    [RouterModule.forRoot(rootRoutesConfig)],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
