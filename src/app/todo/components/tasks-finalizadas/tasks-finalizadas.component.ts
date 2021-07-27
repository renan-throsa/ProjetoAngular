import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TasksService } from '../../todo.service';
import { Store } from '../../todo.store';

@Component({
  selector: 'app-tasks-finalizadas',
  templateUrl: './tasks-finalizadas.component.html',
  styles: [
  ]
})
export class TasksFinalizadasComponent implements OnInit {

  finalizados$: Observable<any[]>;

  constructor(private tasksService: TasksService, private _store: Store) { }

  ngOnInit() {
    this.finalizados$ = this._store.getToDoList().pipe(
      map(todolist => todolist.filter(a => !a.iniciado && a.finalizado))
    )   
  }
}
