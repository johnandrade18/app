import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DomiciliariosService {


  constructor(private http: HttpClient) { }

  token = {
    headers:{
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  }
  getData() {
    return this.http.get(`${environment.url}api/v1/AgendaDomiciliaria`, this.token);
  }
}
