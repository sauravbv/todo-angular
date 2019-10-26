import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


export const TOKEN = 'token'
export const authenticateuser = 'authenticateUser'

@Injectable({
  providedIn: 'root'
})

export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }


  executeJWTAuthenticationService(username, password) {


    return this.http.post<any>(`http://localhost:8081/authenticate`,{
      username,
      password
    })
      .pipe(
        map(
          data => {
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
            sessionStorage.setItem(authenticateuser, username);
            return data;
          }
        )
      )
  }


  // executeAuthenticationService(username, password) {

  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);


  //   let headers = new HttpHeaders({
  //     Authorization: basicAuthHeaderString
  //   })

  //   return this.http.get<AuthenticationBean>(`http://localhost:8081/basicauth`,
  //     { headers }).pipe(
  //       map(
  //         data => {
  //           sessionStorage.setItem(token, username);
  //           sessionStorage.setItem(authenticateuser, basicAuthHeaderString);
  //           return data;
  //         }
  //       )
  //     )
  // }


  getAuthenticatedUser() {
    return sessionStorage.getItem(authenticateuser)

  }

  getAuthenticatedToken() {
    return sessionStorage.getItem(TOKEN)

  }


  isUserLoggedIn() {
    let user = sessionStorage.getItem(authenticateuser)
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem(authenticateuser);
    sessionStorage.removeItem(TOKEN);
  }

}

export class AuthenticationBean {

  constructor(private message: string) { }
}


