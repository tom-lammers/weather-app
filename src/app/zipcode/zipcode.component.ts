import { Component, OnInit } from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";

@Component({
  selector: 'app-zipcode',
  templateUrl: './zipcode.component.html',
})
export class ZipcodeComponent implements OnInit {

  form: UntypedFormGroup<{zipcode: UntypedFormControl<string>}>;

  constructor() { }

  ngOnInit(): void {
  }

}
