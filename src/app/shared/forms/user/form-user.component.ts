import { Address } from './../../models/Address.model';
import { CepService } from './../../services/cep.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { State } from '../../models/State.model';

@Component({
  selector: 'clinica-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
})
export class FormUserComponent implements OnInit {

  @Input('createdForm') formGroup: FormGroup;

  @Output('formCompleted') dataFormEmitter: EventEmitter<Object> = new EventEmitter<Object>();

  /**
   * refact para array de estados
   */
  states: any;
  
  constructor(
    private route: ActivatedRoute,
    private cepService: CepService
  ) { }

  ngOnInit() {
    this.states = this.route.snapshot.data.states;
  }

  getAddress() {
    if (! this.formGroup.controls['cep'].valid) return;
    
    const cep: string = this.formGroup.controls['cep'].value.replace(/[^0-9]/g, "");
    
    this.cepService.getAddressBy(cep)
      .subscribe((address: Address) => {

        this.formGroup.controls['street'].setValue(address.street);
        this.formGroup.controls['neighborhood'].setValue(address.neighborhood);
        this.formGroup.controls['city'].setValue(address.city);

    }, err => {
      console.log('busca cep erro');
      console.log(err);
      
    });
  }

  submit(): void {
    let formData: Object = this.formGroup.getRawValue();
    formData['state'] = this.setSelectedStateBy(formData['state']);
    
    this.dataFormEmitter.emit(formData);
  }

  private setSelectedStateBy(abbreviation: string): State {
    return this.states.find(state => state.abbreviation == abbreviation);
  }
}
