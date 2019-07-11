import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  private position: 'top' | 'middle' = 'middle';

  moveUp() {
    this.position = 'top';
  }

  ngOnInit() {
  }

}
