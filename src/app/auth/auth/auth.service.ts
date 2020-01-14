import { TokenService } from './../token/token.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthUserService } from 'src/app/shared/services/auth-user.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/models/user.model';


const API_URL: string = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: AuthUserService,
    private tokenService: TokenService
) { }

  authenticate(email: string, password: string): Observable<Object> {
    return this.http
        .post(`${API_URL}/authenticate`, 
            {email, password}, 
            {observe: 'response'}
        )
        .pipe(tap(res => {
            const authToken = (<any>res).body.accessToken;
            const user = new User((<any>res).body.user);
    
            this.tokenService.setToken(authToken);
            this.userService.setUser(user);
            console.log(`User ${user.id} with email ${user.email} authenticated with token ${authToken}`);
        }));
  }
}
