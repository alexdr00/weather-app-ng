import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  @Output() submitted = new EventEmitter();
  @Input() city: FormControl;
}
