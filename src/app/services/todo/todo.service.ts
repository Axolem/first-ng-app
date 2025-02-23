import { Todo } from '#/app/model/todo/index.type';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoItems: Array<Todo> = [
    {
      title: 'Groceries',
      completed: false,
      id: 1,
      userId: 4,
    },
    {
      title: 'Car Wash',
      completed: true,
      id: 2,
      userId: 4,
    },
    {
      title: 'Dance Class',
      completed: false,
      id: 3,
      userId: 4,
    },
  ];
  constructor() {}
}
