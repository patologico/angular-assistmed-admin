import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../app/material/material.module'

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';

import { ProductsComponent } from './components/products/products.component';
import { ServicesComponent } from './components/services/services.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CreateProductComponent } from './components/products/create-product/create-product.component';
import { AddServicesComponent } from './components/products/add-services/add-services.component';




@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    ProductsComponent,
    ServicesComponent,
    HomepageComponent,
    CreateProductComponent,
    AddServicesComponent
  ],
  entryComponents: [
    AddServicesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
