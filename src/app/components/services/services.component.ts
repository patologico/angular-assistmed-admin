import { Component, OnInit } from '@angular/core';
import { Service } from '../../models/service'

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  servicios: Service[] = [
    {
      id: '1',
      descripcion: 'Asistencia medica por accidente',
      idioma: 'espanol'
    },
    {
      id: '2',
      descripcion: 'Asistencia médica por enfermedad',
      idioma: 'espanol'
    },
    {
      id: '3',
      descripcion: 'Asistencia médica en caso de pre-existencia',
      idioma: 'espanol'
    },
    {
      id: '4',
      descripcion: 'Asistencia médica en caso de pre-existencia',
      idioma: 'espanol'
    },
    {
      id: '5',
      descripcion: 'Medicamentos',
      idioma: 'espanol'
    },
    {
      id: '6',
      descripcion: 'Odontología de urgencia',
      idioma: 'espanol'
    },
    {
      id: '7',
      descripcion: 'Cancelacion de viaje multi causa',
      idioma: 'espanol'
    },

  ]

  constructor() { }

  ngOnInit() {
  }

}
