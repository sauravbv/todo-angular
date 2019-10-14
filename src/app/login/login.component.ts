import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

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

  constructor(private router: Router,
    private hardcodedAuthentication: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin(){
    console.log('username: ' +this.username);
    console.log('password: ' +this.password)

    // if(this.username==='saurav' && this.password==='saurav123')
    if(this.hardcodedAuthentication.authenticate(this.username, this.password))
   
    {
      this.errorFlag=false;
      this.router.navigate(['welcome',this.username])
    }else{
      this.errorFlag=true;
    }

  }

}
