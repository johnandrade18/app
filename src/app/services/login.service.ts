import { Injectable } from '@angular/core';
import { Ilogin } from '../interface/ilogin';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient) { }

  // Login Authentication Service
  login(data: Ilogin) {
    return  this.http.post(environment.urlLogin, data).pipe(
      map( (res: any) => {
        // Capturamos el token
        localStorage.setItem('token', res.access_token)
      }
    ))
  }
}
