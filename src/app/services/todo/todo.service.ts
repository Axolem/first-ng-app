import { Todo } from '#/app/model/todo/index.type';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  http = inject(HttpClient)

  getTodosFromApi(){
    return this.http.get<Array<Todo>>("https://jsonplaceholder.typicode.com/todos/")
  }

  constructor() {}
}
