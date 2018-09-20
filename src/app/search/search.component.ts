import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ApiService]
})
export class SearchComponent implements OnInit {

  private _data: any[];

  constructor(private api : ApiService) { }

  ngOnInit() {}

  onChangeCriteria(criteria: string) {
    this.getData(criteria);
  }

  getData = (criteria: string) => {
    switch (criteria) {
      case 'Agencia':
        this.api
          .getAgencies()
          .subscribe((res: any[]) => this._data = res);
        break;
      case 'Estado':
        this.api
          .getTypesStatus()
          .subscribe((res: any[]) => this._data = res);
        break;
      case 'Tipo':
        this.api
          .getTypesMissions()
          .subscribe((res: any[]) => this._data = res);
        break;
    }
  }

}
