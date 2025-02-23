import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from '../services/todo/todo.service';
import type { Todo } from '../model/todo/index.type';
import { catchError } from 'rxjs';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/todo/filter-todos.pipe';

@Component({
  selector: 'app-todo',
  imports: [TodoItemComponent, FormsModule, FilterTodosPipe],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent implements OnInit {
  todoService = inject(TodoService);
  todoItems = signal<Array<Todo>>([]);
  searchTerm = signal<string>('');

  updateTodoState(todo: Todo) {
    this.todoItems.update((todos) =>
      todos.map((todo_) =>
        todo.id === todo_.id ? { ...todo_, completed: !todo.completed } : todo_
      )
    );
  }

  updateSearchTerm(text: string){
    this.searchTerm.set(text)
  }

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
