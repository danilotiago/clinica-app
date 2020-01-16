import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'clinica-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
})
export class FormUserComponent implements OnInit {

  @Input('createdForm') formGroup: FormGroup;

  @Output('formCompleted') dataFormEmitter: EventEmitter<Object> = new EventEmitter<Object>();

  constructor() { }

  ngOnInit() {}

  submit(): void {
    const formData: Object = this.formGroup.getRawValue();
    this.dataFormEmitter.emit(formData);
  }

  showCities(): void {
    console.log("teste")
  }
}
