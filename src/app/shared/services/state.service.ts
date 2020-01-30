import { State } from './../models/State.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_URL: string = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * refact
   */
  getAllStates(): Observable<any> {
    return this.http
      .get(`${API_URL}/states`)
  }
}
