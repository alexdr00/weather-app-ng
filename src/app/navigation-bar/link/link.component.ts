import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Link} from '../../../types';

@Component({
  selector: 'app-nav-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent {
  @Input() link: Link;
  @Output() clicked = new EventEmitter();
}
