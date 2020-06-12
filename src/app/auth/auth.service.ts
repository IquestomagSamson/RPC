import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthLoginInfo} from './login-infor';
import {Observable} from 'rxjs';
import {SignUpInfo} from './signup-infor';
import {JwtResponse} from './jwt-response';
import {UserForm} from './user-profile/user-form';
import {PassForm} from './user-profile/pass-form';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthorized = false;
  private loginUrl = 'http://localhost:8080/api/auth/signin';
  private signupUrl = 'http://localhost:8080/api/auth/signup';
  private changPassword = 'http://localhost:8080/api/auth/update-password';
  private updateProfile = 'http://localhost:8080/api/auth/update-profile';
  constructor(private http: HttpClient) {
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }
  updateUser(infor: UserForm): Observable<string> {
    return this.http.put<string>(this.updateProfile + '/' + infor.id , infor);
  }

  updatePassword(passForm: PassForm): Observable<string> {
    return this.http.put<string>(this.changPassword + '/' + passForm.id , passForm);
  }
}

