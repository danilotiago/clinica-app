import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Specialty } from '../models/Specialty.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

const API_URL: string = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class SpecialtyService {

  constructor(private http: HttpClient) { }

  getAllSpecialties(): Observable<Specialty[]> {
    return this.http
      .get<Specialty[]>(`${API_URL}/specialties`)
      .pipe(map(json => json.map(specialtyData => {
        return (new Specialty()).fromJson(specialtyData)
      })));
  }
}
