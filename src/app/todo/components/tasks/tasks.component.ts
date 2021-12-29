import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { TasksService } from '../../todo.service';
import { Store } from '../../todo.store';
import { Assignment } from '../Assignment';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit, OnDestroy {

  todolist$: Observable<Assignment[]>;
  subscription: Subscription;

  constructor(private taskService: TasksService, private _store: Store) {
    this.subscription = this.taskService.getTodoList$.subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  ngOnInit() {
    this.todolist$ = this._store.getToDoList().pipe(
      map(todolist => todolist?.filter(a => !a.iniciado && !a.finalizado))
    )
    this.subscription = this.taskService.getTodoList$.subscribe();
  }

  onToggle(event) {
    this.taskService.toogle(event);
  }

}
