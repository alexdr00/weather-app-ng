import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  constructor() { }

  city = new FormControl('');

  onSubmit() {
    console.log(this.city);
  }

  ngOnInit() {
  }

}
