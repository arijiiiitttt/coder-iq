import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Bodyy } from '../bodyy/bodyy';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [RouterOutlet, Bodyy],
  template: `
    <div class="w-full flex justify-center">
      <div class="max-w-[1200px] w-full flex justify-between items-start px-4 py-6 gap-6">
                <div class="w-[78%] border border-gray-300 min-h-screen p-4">
          <router-outlet></router-outlet>
        </div>
        <div class="w-[22%] border border-gray-300 min-h-screen p-4">
          <app-bodyy></app-bodyy>
        </div>
      </div>
    </div>
  `,
})
export class Body {}
