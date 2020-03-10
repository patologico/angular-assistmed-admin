import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';

@Component({
  selector: 'app-add-scope',
  templateUrl: './add-scope.component.html',
  styleUrls: ['./add-scope.component.scss']
})
export class AddScopeComponent implements OnInit {
  dataScope: any;

  constructor(private dataApiService: DataApiService) { }

  ngOnInit() {
    this.dataApiService.getScopeAll('./assets/alcance.json').subscribe(
      response => {
        this.dataScope = response;
      }
    ) ;
  }

}
