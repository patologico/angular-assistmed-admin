import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule, MatChipsModule } from '@angular/material';
import { MatSliderModule } from '@angular/material/slider';


const MaterialComponents = [
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatSliderModule,
  MatButtonModule,
  MatChipsModule
]

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    MatTableModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSliderModule,
    MatButtonModule,
    MatChipsModule
  ]
})
export class MaterialModule { }
