import { Component, Input, OnInit } from '@angular/core';
import { Assignment } from '../Assignment';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['todo-list.component.css'] 
})
export class TodoListComponent {

  @Input()
  list: Assignment[];

}
