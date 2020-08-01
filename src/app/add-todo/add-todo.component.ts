import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
import {AppService} from "../app.service";


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  form : FormGroup;

  constructor(private _fb: FormBuilder,
              private appService: AppService) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      title: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      description: ['', Validators.compose([Validators.required, Validators.maxLength(120)])]
    })
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

  submitTodo() {
    this.appService.addTodo(this.form.value)
    this.form.reset();
  }
}
