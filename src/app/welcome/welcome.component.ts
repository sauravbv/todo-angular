import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name: '';
  messageFromService: String;
  errorMessage: String;

  constructor(private router: ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit() {
   this.name = this.router.snapshot.params['name']

  }

  getWelcomeMessage(){
    console.log(this.service.getWelcomeMessageService());
    console.log('getWelcomeMessage is working');
    this.service.getWelcomeMessageService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorException(error)
    );
  }

  getWelcomeMessageWithPathVariable(){
    console.log(this.service.getWelcomeMessageService());
    console.log('getWelcomeMessage is working');
    this.service.getWelcomeMessageServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorException(error)
    );
  }

  handleSuccessfulResponse(response){
    this.messageFromService = response.message;
  }

  handleErrorException(error){
    this.errorMessage = error.error.message;
  }
}
