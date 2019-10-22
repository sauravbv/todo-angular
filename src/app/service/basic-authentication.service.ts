import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }


  executeAuthenticationService(username,password) {

    let basicAuthHeaderString = 'Basic ' + window.btoa(username+ ':' +password);


    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<AuthenticationBean>(`http://localhost:8081/basicauth`,
    {headers}).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticateUser', username);
          sessionStorage.setItem('token', basicAuthHeaderString);
          return data;
        }
      )
    )
    
    ;
    console.log('welcome service is working');
  }


  getAuthenticatedUser(){
    return sessionStorage.getItem('authenticateUser')
   
  }

  getAuthenticatedToken(){
    return sessionStorage.getItem('token')
   
  }


  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticateUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticateUser');
    sessionStorage.removeItem('token');
  }

  }

  export class AuthenticationBean{

    constructor(private message: string){}
  }


