import { Component, OnInit } from '@angular/core';
// import {MatTableModule} from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { DataApiService } from '../../services/data-api.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'country', 'provider', 'actions'];
  data: any;
  dataSource: MatTableDataSource<any>;

  constructor(private DataApiService: DataApiService) { }

  ngOnInit() {
    this.getBookingAll();
  }

  getBookingAll() {
    // Llamada Json duro Local:
    this.DataApiService.getProductsAll('./assets/productos.json').subscribe(
        response => {
          this.data = response;
          this.dataSource = new MatTableDataSource(this.data);
          console.log(this.dataSource);
        }
    );
  }

  logData(row) {
    console.log(row);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}