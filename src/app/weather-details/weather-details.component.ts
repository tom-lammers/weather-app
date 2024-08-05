import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-details',
  standalone: true,
  imports: [],
  templateUrl: './weather-details.component.html',
})
export class WeatherDetailsComponent {
  @Input() location: string = '';
}
