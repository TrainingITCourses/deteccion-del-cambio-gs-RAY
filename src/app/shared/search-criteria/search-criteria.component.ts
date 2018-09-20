import { Component, OnInit, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchCriteriaComponent implements OnInit {

  @Output() public criteria = new EventEmitter<string>();

  selected="";

  constructor() { }

  ngOnInit() {
  }

  onChange = (event) => {
    this.criteria.next(event.srcElement.value);
  }

}
