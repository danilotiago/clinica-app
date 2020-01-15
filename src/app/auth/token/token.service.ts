import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const KEY: string = 'authToken';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private storage: Storage) { }

  setToken(token: string): void {
    this.storage.set(KEY, token);
  }

  getToken(): Promise<string | void> {
    return this.storage.get(KEY);
  }

  removeToken(): Promise<string> {
    return this.storage.remove(KEY);
  }
}
