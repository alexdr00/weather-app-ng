import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(city: string) {
    const url = 'http://localhost:5000/api/weather';

    return this.http.post(url, { city });
  }
}
