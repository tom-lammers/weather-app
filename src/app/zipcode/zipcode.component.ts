import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-zipcode',
  templateUrl: './zipcode.component.html',
})
export class ZipcodeComponent implements OnInit {

  form: FormGroup<{zipcode: FormControl<string>}>;

  constructor() { }

  ngOnInit(): void {
  }

}
