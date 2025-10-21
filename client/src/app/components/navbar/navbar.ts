import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <div
      class="w-full border border-gray-300 rounded-md flex justify-between items-center h-12"
    >
      <ul
        class="flex items-center ml-4 gap-5 text-[13px] font-semibold tracking-wide"
      >
        <li><a routerLink="/home" routerLinkActive="active-link" class="nav-link" [routerLinkActiveOptions]="{ exact: true }">HOME</a></li>
        <li><a routerLink="/top" routerLinkActive="active-link" class="nav-link">TOP</a></li>
        <li><a routerLink="/catalog" routerLinkActive="active-link" class="nav-link">CATALOG</a></li>
        <li><a routerLink="/contests" routerLinkActive="active-link" class="nav-link">CONTESTS</a></li>
        <li><a routerLink="/gym" routerLinkActive="active-link" class="nav-link">GYM</a></li>
        <li><a routerLink="/problemset" routerLinkActive="active-link" class="nav-link">PROBLEMSET</a></li>
        <li><a routerLink="/groups" routerLinkActive="active-link" class="nav-link">GROUPS</a></li>
        <li><a routerLink="/rating" routerLinkActive="active-link" class="nav-link">RATING</a></li>
        <li><a routerLink="/calendar" routerLinkActive="active-link" class="nav-link">CALENDAR</a></li>
        <li><a routerLink="/help" routerLinkActive="active-link" class="nav-link">HELP</a></li>
      </ul>
  <div class="flex items-center mr-3 relative">
  <span class="absolute left-2 text-gray-500 text-sm">🔍</span>
  <input
    type="text"
    placeholder=""
    class="border border-gray-300 rounded-sm h-[22px] w-[130px] text-sm pl-6 pr-2 outline-none"
  />
</div>
</div>
  `,
  styles: [`
    .nav-link {
      position: relative;
      padding-bottom: 4px;
      transition: color 0.2s;
    }

    .nav-link::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      height: 2px;
      background-color: #7c3aed;
      transition: width 0.3s ease;
    }

    .active-link {
      color: #7c3aed;
    }

    .active-link::after {
      width: 100%;
    }

    .nav-link:hover {
      color: #7c3aed;
    }
  `],
})
export class Navbar { }
