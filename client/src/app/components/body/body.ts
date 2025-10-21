import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Bodyy } from '../bodyy/bodyy';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [RouterOutlet, Bodyy],
  template: `
<div class="p-4 flex flex-row gap-x-4 justify-center items-center">
 <router-outlet></router-outlet>
      <app-bodyy></app-bodyy>
</div>   
  `,
})
export class Body {}
