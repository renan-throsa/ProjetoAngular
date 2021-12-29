import { Store } from './todo.store';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assignment } from './components/Assignment';
import { tap } from 'rxjs/operators';

@Injectable()
export class TasksService {

  private readonly url = "http://localhost:3000/todolist";
  constructor(private _http: HttpClient, private _store: Store) { }

  getTodoList$: Observable<Assignment[]> = this._http
    .get<Assignment[]>(this.url)
    .pipe(
      tap(list => this._store.setList(list))
    );

  toogle(task: Assignment) {
    this._http.put(`${this.url}/${task.id}`, task)
      .subscribe(() => {
        this._store.seItem(task);
      });
  }

  /* getToDoList(): Observable<Task[]> {
    return this.http
      .get<Task[]>('http://localhost:3000/todolist');
  } */
}
