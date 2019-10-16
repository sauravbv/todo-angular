import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router, ActivatedRoute } from '@angular/router';


export class Todo{
  constructor(
    public id: number,
    public username: string,
    public description: string,
    public status: boolean,
    public targetDate: Date
  ){}


}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})



export class ListTodosComponent   {


  
  
  constructor(
    private todosService: TodoDataService,
    private router: ActivatedRoute
  ) {
    console.log('twi');
   }

  todos: Todo[];
  username:'';
  messageFromService: String;
  errorMessage: String;
  deleteMessage: String;

   ngOnInit() {
     this.username = this.router.snapshot.params['username'] 
    this.refreshTodos()
  }


  refreshTodos(){
    this.todosService.getTodosService('saurav').subscribe(
      response => {
      this.todos = response});
  }

  deleteTodo(id){
    console.log('delete works')
    
    this.todosService.deleteTodoService('saurav',id).subscribe(response => {
      console.log('lolwa')
      this.deleteMessage = `Delete of todo ${id} Successfull`;
      });
  
  }
}
