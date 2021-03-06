import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatStepperModule} from '@angular/material/stepper';


const MaterialComponents = [
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatSliderModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatSortModule,
  MatPaginatorModule,
  MatCardModule,
  MatSelectModule,
  MatDialogModule,
  DragDropModule,
  MatGridListModule,
  MatDividerModule,
  MatStepperModule
];

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatSliderModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSortModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule,
    MatDialogModule,
    DragDropModule,
    MatGridListModule,
    MatDividerModule,
    MatStepperModule
  ]
})
export class MaterialModule { }
