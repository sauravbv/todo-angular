import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app.constants';


export class HelloWorldBean {
  constructor(
    private message: string
  ) {

  }
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  getWelcomeMessageService() {
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean`);
    console.log('welcome service is working');
  }

  getWelcomeMessageServiceWithPathVariable(name) {
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // })

    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean/path-variable/${name}`)
  //  {headers});
    console.log('welcome service is working');
  }

  // createBasicAuthenticationHttpHeader() {
  //   let user = 'saurav'
  //   let password = 'saurav123'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(user+ ':' +password);
  //   console.log(basicAuthHeaderString)
  //   return basicAuthHeaderString;
  // }
}
