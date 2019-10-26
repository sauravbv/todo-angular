import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../../list-todos/list-todos.component'
import { API_URL, API_URL_JPA } from 'src/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient
  ) { }

  getTodosService(username){    
    return this.http.get<Todo[]>(`${API_URL_JPA}/users/${username}/todos`);
  }

  deleteTodoService(username,id){
    return this.http.delete(`${API_URL_JPA}/users/${username}/todos/${id}`);
  }

  retreiveTodo(username,id){
    return this.http.get<Todo>(`${API_URL_JPA}/users/${username}/todos/${id}`);
  }

  updateTodo(username,id,todo)
  {
    return this.http.put(`${API_URL_JPA}/users/${username}/todos/${id}`,todo);
  }

  createTodo(username,todo)
  {
    return this.http.post(`${API_URL_JPA}/users/${username}`,todo);
  }
}
