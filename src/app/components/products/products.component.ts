import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { DataApiService } from '../../services/data-api.service';




@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})



export class ProductsComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  data: any;
  dataSource = this.data;

  constructor(private DataApiService: DataApiService) { }

  ngOnInit() {
  }

  getBookingAll() {
    // Llamada Json duro Local:
    this.DataApiService.getProductsAll('./assets/productos.json').subscribe(
        response => {
          this.data = response;
          console.log(this.data);
        }
    );
  }

}
