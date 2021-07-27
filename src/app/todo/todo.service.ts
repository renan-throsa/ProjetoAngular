import { Store } from './todo.store';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assignment } from './components/Assignment';
import { tap } from 'rxjs/operators';

@Injectable()
export class TasksService {

  constructor(private _http: HttpClient, private _store: Store) { }

  getTodoList$: Observable<Assignment[]> = this._http
    .get<Assignment[]>('http://localhost:3000/todolist')
    .pipe(
      tap(next => this._store.set('todolist', next))
    );

  /* getToDoList(): Observable<Task[]> {
    return this.http
      .get<Task[]>('http://localhost:3000/todolist');
  } */
}
