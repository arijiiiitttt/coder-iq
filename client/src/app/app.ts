import { Component, signal } from '@angular/core';
import { Body } from './components/body/body';
import { Header } from './components/header/header';
import { Fooder } from './components/fooder/fooder';

@Component({
  selector: 'app-root',
  imports: [Header, Body, Fooder],
  template: `
  <app-header></app-header>
  <app-body class=""></app-body>
<app-fooder></app-fooder>
  `,

})
export class App {
  protected readonly title = signal('code-iq');
}
