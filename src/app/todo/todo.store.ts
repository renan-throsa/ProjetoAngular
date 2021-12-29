import { Assignment } from "./components/Assignment";
import { BehaviorSubject, Observable } from 'rxjs'

export interface State {
    todolist: Assignment[];
}

const state: State = {
    todolist: []
}

export class Store {
    private _subject = new BehaviorSubject<Assignment[]>(null);
    private _store = this._subject.asObservable();

    /*
    get value() {
        return this._subject.value;
    }
    */

    setList(list: Assignment[]) {
        this._subject.next(list)
    }

    seItem(item: Assignment) {
        const list = this._subject.value.map((task: Assignment) => {
            if (item.id === task.id) {
                return { ...item, ...task } //Updates all item props with task values;
            } else {
                return task;
            }
        });
        this.setList(list);
    }

    getToDoList(): Observable<Assignment[]> {
        return this._store;
    }

    /*
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
    */
}