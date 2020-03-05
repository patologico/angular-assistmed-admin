import { Component, OnInit, ViewChild } from '@angular/core';
// import {MatTableModule} from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
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

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

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
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
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