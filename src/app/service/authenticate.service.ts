import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient) { }

  authenticateUser(credential: any): Observable<boolean> {
     return this.http.post("api/authenticate", credential).pipe(
      map((result: any) => {
        console.log(result);
        if(result && result.token) {
           this.setToken(result.token);
           return true;
        }
        else
           return false;
      })
    )
       
  }

  setToken(token: any){
    localStorage.setItem('token', token);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return this.getToken() != null;     
  }

 }
