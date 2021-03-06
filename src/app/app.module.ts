import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

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
import { ReadProductComponent } from './components/products/read-product/read-product.component';
import { UpdateProductComponent } from './components/products/update-product/update-product.component';
import { AddScopeComponent } from './components/products/add-scope/add-scope.component';

// Firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    ProductsComponent,
    ServicesComponent,
    HomepageComponent,
    CreateProductComponent,
    AddServicesComponent,
    ReadProductComponent,
    UpdateProductComponent,
    AddScopeComponent
  ],
  entryComponents: [
    AddServicesComponent,
    AddScopeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.configFirebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
