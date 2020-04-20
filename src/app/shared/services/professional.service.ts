import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Professional } from '../models/Professional.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { convertIdToSendToAPI } from '../utils/convertions';

const API_URL: string = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

  constructor(private http: HttpClient) { }

  getAllProfessionals(): Observable<Professional[]> {
    return this.http
      .get<Professional[]>(`${API_URL}/professionals`)
      .pipe(map(json => json.map(professionalData => {
        return (new Professional()).fromJson(professionalData)
      })));
  }

  get(id: string): Observable<Professional> {
    return this.http
      .get<Professional[]>(`${API_URL}/professionals/${id}`)
      .pipe(
        map(json => (new Professional()).fromJson(json))
      );
  }

  getAllProfessionalsBySpecialty(specialtyId: String): Observable<Professional[]> {
    return this.http  
      .get<Professional[]>(`${API_URL}/professionals?specialtyId=${specialtyId}`)
      .pipe(map(json => json.map(professionalData => {
        return (new Professional()).fromJson(professionalData)
      })));
  }

  save(professional: Professional): Observable<any> {
    const specialtiesIds: string[] = professional.specialties
      .map(specialty => specialty.id);

    const payload: object = {
      user: professional.user.id,
      specialties: specialtiesIds
    };

    return this.http
      .post(`${API_URL}/professionals`, payload)
  }

  edit(id: string, professional: Professional): Observable<any> {
    const specialtiesIds: string[] = professional.specialties
      .map(specialty => specialty.id);

    const payload: object = {
      user: professional.user.id,
      specialties: specialtiesIds
    };
    
    return this.http
      .put(`${API_URL}/professionals/${id}`, payload)
  }

  remove(professional: Professional): Observable<any> {
    return this.http
      .delete(`${API_URL}/professionals/${professional.id}`)
  }
  
}
