import type { Todo } from '#/app/model/todo/index.type';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTodos',
})
export class FilterTodosPipe implements PipeTransform {
  transform(value: Todo[], searchTerm: string): Todo[] {
    if (!searchTerm) return value;

    return value.filter((v) =>
      v.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
