import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { DataApiService } from '../../services/data-api.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'pais', 'proveedor'];
  data: any;
  dataSourceProductos: any;

  constructor(private DataApiService: DataApiService) { }

  ngOnInit() {
    this.getBookingAll();
  }

  getBookingAll() {
    // Llamada Json duro Local:
    this.DataApiService.getProductsAll('./assets/productos.json').subscribe(
        response => {
          this.dataSourceProductos = response;
          console.log(this.dataSourceProductos);
        }
    );
  }
}