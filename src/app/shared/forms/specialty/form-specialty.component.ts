import { CepService } from '../../services/cep.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Specialty } from '../../models/Specialty.model';

@Component({
  selector: 'clinica-form-specialty',
  templateUrl: './form-specialty.component.html',
  styleUrls: ['./form-specialty.component.scss'],
})
export class FormSpecialtyComponent implements OnInit {

  @Input('createdForm') formGroup: FormGroup;

  @Output('formCompleted') dataFormEmitter: EventEmitter<Object> = new EventEmitter<Object>();
  
  constructor() { }

  ngOnInit() { }

  submit(): void {
    const formData: object = this.formGroup.getRawValue();
    const newSpecialty: Specialty    = (new Specialty()).fromObject(formData);

    this.dataFormEmitter.emit(newSpecialty);
  }
}
