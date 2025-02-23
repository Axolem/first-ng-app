import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    async loadComponent() {
      const m = await import('#/app/home/home.component');
      return m.HomeComponent;
    },
  },
  {
    path: "todo",
    async loadComponent() {
      const m = await import('#/app/todo/todo.component');
      return m.TodoComponent;
    }
  }
];
