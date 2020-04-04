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
  @Input('actionButton') actionButton: string;

  @Output('formCompleted') dataFormEmitter: EventEmitter<Object> = new EventEmitter<Object>();

  procedure: String = '';
  procedures: String[] = [];
  
  constructor() { }

  ngOnInit() { 
    if (this.formGroup.value.procedures) {
      this.procedures = this.formGroup.value.procedures;
    }
  }

  submit(): void {
    const formData: object = this.formGroup.getRawValue();
    formData['procedures'] = this.procedures;
    
    const newSpecialty: Specialty = (new Specialty()).fromObject(formData);
    this.dataFormEmitter.emit(newSpecialty);
  }

  addProcedure() {
    if (! this.procedure) return;
    
    this.procedures.unshift(this.procedure);
    this.procedure = '';
  }

  removeProcedure(name: string) {
    this.procedures = this.procedures.filter(procedure => procedure != name);
  }
}
