import { Address } from './../../models/Address.model';
import { CepService } from './../../services/cep.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { State } from '../../models/State.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'clinica-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
})
export class FormUserComponent implements OnInit {

  @Input('createdForm') formGroup: FormGroup;

  @Output('formCompleted') dataFormEmitter: EventEmitter<Object> = new EventEmitter<Object>();

  states: State[];
  
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
        this.formGroup.controls['state'].setValue(this.setSelectedStateBy((<any>address).state));
    }, err => {
      console.log('busca cep erro');
      console.log(err);
    });
  }

  submit(): void {
    const formData: object = this.formGroup.getRawValue();
    const newUser: User    = (new User()).fromObject(formData);
    
    newUser.address.cep = newUser.address.cep.replace(/[^0-9]/g, "");

    this.dataFormEmitter.emit(newUser);
  }

  private setSelectedStateBy(abbreviation: string): State {
    return this.states.find(state => state.abbreviation == abbreviation);
  }
}
