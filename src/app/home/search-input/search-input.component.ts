import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  @Output() submitted = new EventEmitter();

  constructor() { }

  city = new FormControl('');

  onSubmit() {
    console.log(this.city);
  }

  ngOnInit() {
  }

}
