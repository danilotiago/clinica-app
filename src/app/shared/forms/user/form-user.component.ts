import { Address } from './../../models/Address.model';
import { CepService } from './../../services/cep.service';
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

  constructor(
    private cepService: CepService
  ) { }

  ngOnInit() { }

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
    const formData: Object = this.formGroup.getRawValue();
    this.dataFormEmitter.emit(formData);
  }

  showCities(): void {
    console.log("teste")
  }
}
