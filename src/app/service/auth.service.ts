import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../model/user';

export const ANONYMOUS_USER : User = {
  id: undefined,
  email: '',
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user = new BehaviorSubject<User>(ANONYMOUS_USER);

  public user$: Observable<User> = this.user.asObservable();

  constructor(private http: HttpClient) { }

  public signUp(account: string,password: string ) {
    
  }
}
