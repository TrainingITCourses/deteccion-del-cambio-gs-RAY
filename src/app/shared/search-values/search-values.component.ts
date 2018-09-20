import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-search-values',
  templateUrl: './search-values.component.html',
  styleUrls: ['./search-values.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchValuesComponent implements OnInit {

  @Input() public data: any[];
  @Output() public value = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onChange = (event) => {
    this.value.next(+event.srcElement.value);
  }

}