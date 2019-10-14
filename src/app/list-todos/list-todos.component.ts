import { Component, OnInit } from '@angular/core';


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



export class ListTodosComponent implements OnInit {


  todos = [
    new Todo(1, 'Learn to Dance', false, new Date()),
    new Todo(2, 'To become expert at angular', false, new Date()),
    new Todo(3, 'Visit Iceland', false, new Date()),
    
    {id:1, description:'Learn to dance'},
    {id:2, description:'To become expert at angular'},
    {id:3, description: 'Visit Iceland'}

  ]

  // todo = {
  //   id:1, description:'learn to dance'
  // }
  
  constructor() { }

  ngOnInit() {
  }

}
