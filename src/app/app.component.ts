import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '#/app/home/home.component';
import { HeaderComponent } from '#/app/components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, HeaderComponent],
  template: `
    <app-header />
    <app-home />

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'first-ng-app';
}
