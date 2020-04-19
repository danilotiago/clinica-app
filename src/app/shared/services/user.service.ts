import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { convertIdToSendToAPI } from '../utils/convertions';
import { map } from 'rxjs/operators';

const API_URL: string = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers(like: String): Observable<User[]> {
    return this.http
    .get<User[]>(`${API_URL}/users?like=${like}`)
    .pipe(map(json => json.map(specialtyData => {
      return (new User()).fromJson(specialtyData)
    })));
  }

  save(newUser: User): Observable<any> {
    newUser = this.formatObjectToSendToApi(newUser);

    return this.http
      .post(`${API_URL}/users`, newUser)
  }

  private formatObjectToSendToApi(user: User): User {
    user.address.state = convertIdToSendToAPI(user.address.state);
    return user;
  }
}
