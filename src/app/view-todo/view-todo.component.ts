import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";

@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.component.html',
  styleUrls: ['./view-todo.component.css']
})
export class ViewTodoComponent implements OnInit {
  todos = []

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.currentTodos.subscribe(data=>{
      this.todos = data;
    })
  }

}
