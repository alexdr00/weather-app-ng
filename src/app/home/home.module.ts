import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SearchInputComponent } from './search-input/search-input.component';
import {MaterialModule} from '../../lib/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';



@NgModule({
  declarations: [HomeComponent, SearchInputComponent, WeatherDetailsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class HomeModule { }
