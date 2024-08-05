import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZipcodeComponent } from './zipcode/zipcode.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ZipcodeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WeatherDetailsComponent,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
