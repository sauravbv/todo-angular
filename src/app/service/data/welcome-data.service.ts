import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class HelloWorldBean{
  constructor(
    private message: string
  ){

  }
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  getWelcomeMessageService(){
    return this.http.get<HelloWorldBean>('http://localhost:8081/hello-world-bean');
    console.log('welcome service is working');
  }

  getWelcomeMessageServiceWithPathVariable(name){
    return this.http.get<HelloWorldBean>(`http://localhost:8081/hello-world-bean/path-variable/${name}`);
    console.log('welcome service is working');
  }


}
