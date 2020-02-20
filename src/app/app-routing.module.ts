import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ServicesComponent } from './components/services/services.component';


const routes: Routes = [
  { path: 'productos', component: ProductsComponent },
  { path: 'servicios', component: ServicesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
