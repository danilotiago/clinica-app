import { Address } from '../../models/Address.model';
import { CepService } from '../../services/cep.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { State } from '../../models/State.model';
import { Professional } from '../../models/Professional.model';

@Component({
  selector: 'clinica-form-professional',
  templateUrl: './form-professional.component.html',
  styleUrls: ['./form-professional.component.scss'],
})
export class FormProfessionalComponent implements OnInit {

  @Input('createdForm') formGroup: FormGroup;

  @Output('formCompleted') dataFormEmitter: EventEmitter<Object> = new EventEmitter<Object>();
  
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

  }

  submit(): void {
    const formData: object = this.formGroup.getRawValue();
    const newProfessional: Professional = (new Professional()).fromObject(formData);

    this.dataFormEmitter.emit(newProfessional);
  }
}
