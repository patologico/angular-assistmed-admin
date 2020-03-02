import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { DataApiService } from '../../services/data-api.service';
// import { from } from 'rxjs';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
 
  displayedColumns: string[] = ['id', 'description', 'language', 'actions'];
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
    this.DataApiService.getProductsAll('./assets/servicios.json').subscribe(
        response => {
          this.data = response;
          this.dataSource = new MatTableDataSource(this.data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
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
