import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {FormControl} from '@angular/forms';
import {WeatherService} from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('move', [
      state('top', style({
        top: '12vh'
      })),

      state('middle', style({
        top: '50vh'
      })),

      transition('middle => top', [
        animate('1s')
      ])
    ]),

    trigger('showDetails', [
      state('hidden', style({
        opacity: 0
      })),

      state('shown', style({
        opacity: 1
      })),

      transition('hidden => shown', [
        animate('0.5s 0.5s')
      ])
    ])
  ]
})
export class HomeComponent {

  constructor(private weatherService: WeatherService) { }

  private position: 'top' | 'middle' = 'middle';
  private hasBeenSubmitted = false;
  private city = new FormControl('');
  private weather;

  onSubmit() {
    this.position = 'top';
    this.hasBeenSubmitted = true;

    this.weather = this.weatherService.getWeather(this.city.value);
    console.log(this.weather);
  }
}
