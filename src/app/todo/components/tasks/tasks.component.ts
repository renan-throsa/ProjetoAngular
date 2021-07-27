import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { TasksService } from '../../todo.service';
import { Store } from '../../todo.store';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit, OnDestroy {

  todolist$: Observable<any[]>
  subscription: Subscription;

  constructor(private taskService: TasksService, private _store: Store) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  ngOnInit() {
    this.todolist$ = this._store.getToDoList().pipe(
      map(todolist => todolist.filter(a => !a.iniciado && !a.finalizado))
    )

    this.subscription = this.taskService.getTodoList$.subscribe();
  }

}
