import { Assignment } from "./components/Assignment";
import { BehaviorSubject, Observable } from 'rxjs'
import { map } from 'rxjs/operators'

export interface State {
    todolist: Assignment[];
}

const state: State = {
    todolist: []
}

export class Store {
    private _subject = new BehaviorSubject<State>(state);
    private _store = this._subject.asObservable();

    get value() {
        return this._subject.value;
    }

    set(name: string, state: any) {
        console.log({ ... this.value, [name]: state })
        this._subject.next({ ... this.value, [name]: state })
    }

    public getToDoList(): Observable<Assignment[]> {
        return this._store
            .pipe(
                map(store => store.todolist)
            )
    }

}