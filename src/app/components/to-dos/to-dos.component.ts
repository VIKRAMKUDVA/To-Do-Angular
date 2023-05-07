import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/ToDo';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit{
  
  todos : ToDo[] | undefined;

  inputTodo : string = "";

  constructor(){}

  ngOnInit(): void {
      this.todos = [
        {
          content : 'First todo',
          completed : false,
          isEdit : false
        },
        {
          content : 'Second todo',
          completed : true,
          isEdit : false
        }
      ]
  }

  toggleDone(id: number){
    this.todos?.map((v, i) => {
      if(i == id) v.completed = !v.completed

      return v;
    })
  }

  deleteToDo(id : number){
    this.todos = this.todos?.filter((v,i) => i !== id);
  }

  addToDo(){
    this.todos?.push({
      content : this.inputTodo,
      completed : false,
      isEdit : false
    });

    this.inputTodo = "";
  }

  toggleEditToDo(id: number){
    this.todos?.map((v, i) => {
      if(i == id) v.isEdit = !v.isEdit

      return v;
    })
  }
}
