import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material';
import { AddServicesComponent } from '../add-services/add-services.component';
import { DataApiService } from '../../../services/data-api.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  data: any;
  dataSelectedServices: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'description'];
  selectedPais = 'argentina';
  selectedProveedor = 'uno';

  constructor(public dialog: MatDialog, private dataApiService: DataApiService) { }

  ngOnInit() {
    this.dataApiService.getProductsAll('./assets/servicios.json').subscribe(
      response => {
        this.data = response;
        this.dataSelectedServices = new MatTableDataSource(this.data);
        console.log(this.dataSelectedServices);
      }
    ) ;
  }

  openServicesDialog() {
    this.dialog.open(
      AddServicesComponent,
      {
        width: '1200px',
        data: {name: 'lala'}
      }
    );
  }

}
