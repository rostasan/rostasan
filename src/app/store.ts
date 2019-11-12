import { Observable ,  BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';



import { State } from 'state';
import { Injectable } from '@angular/core';

const state: State = {
    user: undefined,
    blog: undefined


};

@Injectable()
export class Store {
    private subject = new BehaviorSubject<State>(state);
    private store = this.subject.asObservable().pipe(distinctUntilChanged());

    get value() {
        return this.subject.value;
    }

    select<T>(name: string): Observable<T> {
        return this.store.pipe(pluck(name));
    }

    set(name: string, item: any) {
        this.subject.next({
            ...this.value, [name]: item
        });
    }
}
