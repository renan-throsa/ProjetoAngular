import { TodoModule } from './todo/todo.module';
import { NavigationModule } from './navigation/navigation.module';
import { AppRoutingModule } from './app.routes';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AboutComponent } from './institution/about/about.component';
import { ContactComponent } from './institution/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntryComponent } from './registration/entry/entry.component';

import { NgBrazil } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { CustomFormsModule } from 'ng2-validation';
import { AuthGuard } from './services/app.guard';

registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    EntryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NavigationModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    CustomFormsModule,
    NgBrazil,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
