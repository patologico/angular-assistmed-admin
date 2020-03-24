import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { DataApiService } from '../../../services/data-api.service';

@Component({
  selector: 'app-add-services',
  templateUrl: './add-services.component.html',
  styleUrls: ['./add-services.component.scss']
})

export class AddServicesComponent implements OnInit {

  dataServices: any;
  todo = [
    'Asistencia medica por accidente',
    'Asistencia médica por enfermedad',
    'Asistencia médica en caso de pre-existencia',
    'Cobertura en caso de enfermedad por epidemia',
    'Medicamentos',
    'Odontología de urgencia',
    'Gastos de hotel por convalecencia',
    'Gastos por vuelo demorado (min 6hs.) o cancelado',
    'Late arrival',
    'Cancelacion de viaje multi causa',
    'Asistencia médica en caso de pre-existencia',
    'Sports'
  ];

  done = [

  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  constructor(private dataApiService: DataApiService) { }

  ngOnInit() {
    this.dataApiService.getProductsAll().subscribe(
      response => {
        this.dataServices = response;
        console.log(this.dataServices);
      }
    ) ;
  }



}
