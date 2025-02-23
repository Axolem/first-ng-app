import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from '../services/todo/todo.service';
import { Todo } from '../model/todo/index.type';
import { catchError } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-todo',
  imports: [NgIf],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent implements OnInit {
  todoService = inject(TodoService);
  todoItems = signal<Array<Todo>>([]);

  // Runs on first mount only
  ngOnInit(): void {
    this.todoService
      .getTodosFromApi()
      .pipe(
        catchError((error) => {
          alert(error);
          throw error;
        })
      )
      .subscribe((todos) => this.todoItems.set(todos));
  }
}
