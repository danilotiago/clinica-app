import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Specialty } from '../models/Specialty.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { convertIdToSendToAPI } from '../utils/convertions';

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

  get(id: string): Observable<Specialty> {
    return this.http
      .get<Specialty[]>(`${API_URL}/specialties/${id}`)
      .pipe(
        map(json => (new Specialty()).fromJson(json))
      );
  }

  save(specialty: Specialty): Observable<any> {
    return this.http
      .post(`${API_URL}/specialties`, specialty)
  }

  edit(id: string, specialty: Specialty): Observable<any> {
    specialty = convertIdToSendToAPI(specialty);
    return this.http
      .put(`${API_URL}/specialties/${id}`, specialty)
  }

  remove(specialty: Specialty): Observable<any> {
    return this.http
      .delete(`${API_URL}/specialties/${specialty.id}`)
  }
}