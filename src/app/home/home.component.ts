import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('move', [
      state('top', style({
        top: '12%'
      })),

      state('middle', style({
        top: '50%'
      })),

      transition('middle => top', [
        animate('1s')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  private position: 'top' | 'middle' = 'middle';
  private city = new FormControl('');

  onSubmit() {
    this.position = 'top';
    console.log(this.city);
  }

  ngOnInit() {
  }

}
