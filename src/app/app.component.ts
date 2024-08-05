import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  locations: string[] = [];
  location: string = '';

  addLocation(location: string) {
    console.log('App Component');
    this.locations.push(location);
    this.location = location;
  }
}
