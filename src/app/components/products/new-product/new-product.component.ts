import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material';
import { AddServicesComponent } from '../add-services/add-services.component';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  selectedPais = 'argentina';
  selectedProveedor = 'uno';

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
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
