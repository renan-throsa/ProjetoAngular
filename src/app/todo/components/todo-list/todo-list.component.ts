import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Assignment } from '../Assignment';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['todo-list.component.css']
})
export class TodoListComponent {

  @Input()
  list: Assignment[];

  @Output()
  toggle: EventEmitter<Assignment>;


  constructor() {
    this.toggle = new EventEmitter<Assignment>();
  }

  toogleItem(index: number, action: string) {
    const task: Assignment = this.list[index];
    switch (action) {
      case 'iniciar':
        task.finalizado = false;
        task.iniciado = true;
        break;
      case 'finalizar':
        task.finalizado = true;
        task.iniciado = false;
        break;
      case 'retomar':
        task.finalizado = false;
        task.iniciado = true;
        break;
      case 'cancelar':
        task.finalizado = false;
        task.iniciado = false;
        break;
    }
    this.toggle.emit(task);
  }

}
