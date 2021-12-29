import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TasksService } from '../../todo.service';
import { Store } from '../../todo.store';

@Component({
  selector: 'app-tasks-iniciadas',
  templateUrl: './tasks-iniciadas.component.html',
  styles: [
  ]
})
export class TasksIniciadasComponent implements OnInit {

  iniciados$: Observable<any[]>;

  constructor(private taskService: TasksService, private _store: Store) { }

  ngOnInit() {
    this.iniciados$ = this._store.getToDoList().pipe(
      map(todolist => todolist?.filter(a => a.iniciado && !a.finalizado))
    )
  }
  onToggle(event) {
    this.taskService.toogle(event);
  }
}
