import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-zipcode',
  templateUrl: './zipcode.component.html',
})
export class ZipcodeComponent {
  form: FormGroup<{ zipcode: FormControl<string> }>;
  locations: string[] = [];

  constructor(private fb: NonNullableFormBuilder) {
    this.form = this.fb.group({ zipcode: this.fb.control<string>('') });
  }

  addLocation() {
    this.locations.push(this.form.controls.zipcode.value);
  }
}
