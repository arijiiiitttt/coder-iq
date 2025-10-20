import { Component, signal } from '@angular/core';
import { Body } from './components/body/body';
import { Fooder } from './components/fooder/fooder';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [Header,Body,Fooder],
  template: `
  <app-header></app-header>
  <app-body></app-body>
  <app-fooder></app-fooder>
  `,

})
export class App {
  protected readonly title = signal('code-iq');
}
