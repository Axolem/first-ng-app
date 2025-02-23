import { HighlightCompletedTodoDirective } from '#/app/directives/highlight-completed-todo.directive';
import { Todo } from '#/app/model/todo/index.type';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  imports: [HighlightCompletedTodoDirective],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  todo = input.required<Todo>();
  todoToggled = output<Todo>()

  todoClicked(){
    this.todoToggled.emit(this.todo())
  }

  constructor() {}
}
