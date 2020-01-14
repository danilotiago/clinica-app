import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';
import { TokenService } from 'src/app/auth/token/token.service';
import { Storage } from '@ionic/storage';

const KEY: string = 'userLogged';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  private userSubject: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  private user: User;

  constructor(
    private tokenService: TokenService,
    private storage: Storage
  ) { 
    this.getUserFromStorage().then(user => {
      if (user) this.setUser(user);
    });
  }

  setUser(user: User): void {
    this.user = user;
    this.storeUser();
    this.notify();
  }

  getUser(): Observable<User> { 
    return this.userSubject.asObservable();
  }

  logout() {
    this.removeUser().then(() => {
      this.tokenService.removeToken().then(() => {
        this.userSubject.next(null);
      });
    });
  }

  private notify(): void {
    this.userSubject.next(this.user);
  }

  private storeUser() {
    this.storage.set(KEY, this.user);
  }

  private getUserFromStorage(): Promise<User> {
    return this.storage.get(KEY);
  }

  private removeUser(): Promise<string> {
    return this.storage.remove(KEY);
  }
}
