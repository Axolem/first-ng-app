import {
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { TodoService } from '../services/todo/todo.service';
import { Todo } from '../model/todo/index.type';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent implements OnInit {
  todoService = inject(TodoService);
  todoItems = signal<Array<Todo>>([]);

  // Runs on first mount only
  ngOnInit(): void {
    this.todoItems.set(this.todoService.todoItems);
  }
}
