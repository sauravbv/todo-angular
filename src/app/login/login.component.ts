import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

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
    private hardcodedAuthentication: HardcodedAuthenticationService,
    private basicAuth: BasicAuthenticationService) { }

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

  handleBasicAuthLogin(){
    console.log('username: ' +this.username);
    console.log('password: ' +this.password)

    // if(this.username==='saurav' && this.password==='saurav123')
    if(this.basicAuth.executeAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['welcome',this.username])
          this.errorFlag=false;
        },
        error => {
          console.log(error)
          this.errorFlag=true;
        }
      )
    
    )
   
    {
      this.errorFlag=false;
      this.router.navigate(['welcome',this.username])
    }else{
      this.errorFlag=true;
    }

  }

}
