import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Address } from '../models/Address.model';

const API_CEP: string = environment.API_CEP;

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(
    private http: HttpClient
  ) { }

  getAddressBy(cep: string): Observable<Address> { 
    return this.http
      .get<Address>(`${API_CEP}/${cep}/json`)
      .pipe(map(json => {
        return (new Address()).fromJsonCEP(json);
    }));
  }
}
