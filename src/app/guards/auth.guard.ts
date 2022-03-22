import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private http: HttpClient) { }

  canActivate(): Promise<boolean> {

    return new Promise(resolve => {
      if (localStorage.getItem('token') != null) {
        // let data = {
        //   token: localStorage.getItem('token')
        // }
        // this.http.post('', data).subscribe(res => {
        //   resolve(true);
        // }, err => {
        //  localStorage.clear();
        //   this.router.navigateByUrl('')
        //   resolve(false)
        // });
        resolve(true)
      } else {
        localStorage.clear();
        this.router.navigateByUrl('')
        resolve(false)
      }
    })
  }

}
