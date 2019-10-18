import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router, ActivatedRoute } from '@angular/router';


export class Todo{
  constructor(
    public id: number,
  
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
    private router: Router,
    private route: ActivatedRoute
  ) {
    console.log('twi');
   }

  todos: Todo[];
  username:'';
  messageFromService: String;
  errorMessage: String;
  deleteMessage: String;

   ngOnInit() {
     
    this.refreshTodos()
  }


  refreshTodos(){
    this.todosService.getTodosService('saurav').subscribe(
      response => {
      this.todos = response});
  }

  deleteTodo(id){
   
    this.todosService.deleteTodoService('saurav',id).subscribe(
      response => {
      this.deleteMessage = `Delete of todo ${id} Successfull`;
      this.refreshTodos();
      });
  
  }

  updateTodo(id){
    this.router.navigate(['todos',id])
    console.log(id);
  }

  createTodo(){
    this.router.navigate(['todos',-1])
  }

  
}
