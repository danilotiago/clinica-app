import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL: string = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  verifyEmailInUse(email: String): Observable<Object> {
    return this.http
      .get<Object>(`${API_URL}/emails/email-used/${email}`)
  }
}
