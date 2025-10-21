import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [Navbar , RouterLink, RouterLinkActive , CommonModule , RouterOutlet],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
