import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username= ''
  password= ''
  errorMessage = 'Invalid Credentials'
  errorFlag = false

  constructor() { }

  ngOnInit() {
  }

  handleLogin(){
    console.log('username: ' +this.username);
    console.log('password: ' +this.password)

    if(this.username==='saurav' && this.password==='saurav123')
    {
      this.errorFlag=false;
    }else{
      this.errorFlag=true;
    }

  }

}
