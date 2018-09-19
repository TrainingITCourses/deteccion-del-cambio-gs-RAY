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

  getData = () => {
    this.api
      .getAgencies()
      .subscribe((res: any[]) => this._data = res);
  }

}
