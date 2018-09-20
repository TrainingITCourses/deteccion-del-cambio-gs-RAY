import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {

  @Output() public criteria = new EventEmitter<{criteria: string}>();

  selected="";

  constructor() { }

  ngOnInit() {
  }

  onChange = (event) => {
    this.criteria.next(event.srcElement.value);
  }

}
