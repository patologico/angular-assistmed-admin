import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material';
import { AddServicesComponent } from '../add-services/add-services.component';
import { AddScopeComponent } from '../add-scope/add-scope.component';
import { DataApiService } from '../../../services/data-api.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  data: any;
  dataScope: any;
  dataSelectedServices: MatTableDataSource<any>;
  dataSelectedScope: MatTableDataSource<any>;
  displayedServicesColumns: string[] = ['id', 'description'];
  displayedScopeColumns: string[] = ['service', 'currency', 'value', 'x', 'provider'];
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
    this.dataApiService.getScopeAll('./assets/alcance.json').subscribe(
      response => {
        this.dataScope = response;
        this.dataSelectedScope = new MatTableDataSource(this.dataScope);
        console.log(this.dataSelectedScope);
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
  openScopeDialog() {
    this.dialog.open(
      AddScopeComponent,
      {
        width: '1200px',
        data: {name: 'lala'}
      }
    );
  }

}
