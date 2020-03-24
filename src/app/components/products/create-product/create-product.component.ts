import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

import { MatDialog} from '@angular/material';
import { AddServicesComponent } from '../add-services/add-services.component';
import { AddScopeComponent } from '../add-scope/add-scope.component';
import { DataApiService } from '../../../services/data-api.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  nameProductField: FormControl;

  constructor(
    public dialog: MatDialog,
    private dataApiService: DataApiService,
    private formBuilder: FormBuilder
  ){
    this.nameProductField = new FormControl();
    this.nameProductField.valueChanges.subscribe(
      value => {
        console.log(value)
      }
    );
    this.buildForm();
  }

  ngOnInit() {
    this.dataApiService.getProductsAll().subscribe( res => console.log(res));
  }

  private buildForm() {
    this.firstFormGroup = this.formBuilder.group({
      nameProductField: ['', Validators.required],
      countryProductField: ['', Validators.required],
      providerProductField: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    console.log('ejecutado FormBulder');
  }

}
