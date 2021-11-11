import { Component, OnInit } from '@angular/core';
import { todoAnimationTrigger, todosAnimationTrigger } from '../../../animate/animate';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
  animations: [ todosAnimationTrigger, todoAnimationTrigger]
})
export class ToDoComponent implements OnInit {
 toDoItems?: any[];
  constructor() { }

  ngOnInit(): void {
    this.toDoItems = ["Send the money to the family", 
                      "Pay electricity bills", 
                      "Pay car insurance premium", 
                      "Prepare dinner for the family"];
  }
  addToDoItem(toDoItem: HTMLInputElement) {
    let toDo = toDoItem.value;
    this.toDoItems?.splice(0, 0, toDo);
    toDoItem.value="";
  }

  removeToDoItem(toDoItem: any) {
    let index = this.toDoItems?.indexOf(toDoItem, 0);
    if(index != null){
      this.toDoItems?.splice(index, 1);
    }
  }
}
