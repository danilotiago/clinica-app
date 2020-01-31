import { map } from 'rxjs/operators';
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

  getAllStates(): Observable<State[]> {
    return this.http
      .get<State[]>(`${API_URL}/states`)
      .pipe(map(json => json.map(stateData => {
        return (new State()).fromJson(stateData)
      })));
  }
}
