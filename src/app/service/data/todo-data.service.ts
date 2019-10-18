import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../../list-todos/list-todos.component'

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient
  ) { }

  getTodosService(username){
    console.log('sdfsdf');
    
    return this.http.get<Todo[]>(`http://localhost:8081/users/${username}/todos`);
  }

  deleteTodoService(username,id){
    console.log(username,id)
    return this.http.delete(`http://localhost:8081/users/${username}/todos/${id}`);
  }

  retreiveTodo(username,id){
    console.log(id)
    return this.http.get<Todo>(`http://localhost:8081/users/${username}/todos/${id}`);
  }

  updateTodo(username,id,todo)
  {
    return this.http.put(`http://localhost:8081/users/${username}/todos/${id}`,todo);
  }

  createTodo(username,todo)
  {
    return this.http.post(`http://localhost:8081/users/${username}`,todo);
  }
}
