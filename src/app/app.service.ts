import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private todos = new BehaviorSubject<any[]>([]);
  currentTodos = this.todos.asObservable();

  constructor() { }

  addTodo = (body)=>{
    this.todos.next([...this.todos.getValue(), body])
  }
}
