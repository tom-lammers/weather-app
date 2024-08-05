import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-zipcode',
  templateUrl: './zipcode.component.html',
})
export class ZipcodeComponent {
  form = new FormGroup({
    zipcode: new FormControl<string>(''),
  });

  @Output() locations: EventEmitter<string> = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({ zipcode: this.fb.control<string>('') });
  }

  saveLocation() {
    console.log('Zipcode');
    console.log(this.form.controls.zipcode.value);
    this.locations.emit(this.form.controls.zipcode.value ?? '');
  }
}
