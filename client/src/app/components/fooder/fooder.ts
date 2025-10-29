import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fooder',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-white py-2 px-6">
      <div class="max-w-15xl mx-auto">
        <!-- Centered top border -->
        <div class="flex justify-center mb-6">
          <div class="border-t border-gray-300 w-full max-w-6xl"></div>
        </div>

        <!-- Content -->
        <div class="text-center">
          <!-- Main Footer Text -->
          <div class="text-sm text-gray-700 space-y-1 mb-6">
            <p>
              <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">YourPlatform</a>
              <span class="text-gray-600"> (c) Copyright 2024-2025 Your Name</span>
            </p>
            <p class="text-gray-600">
              The only programming contests Web 2.0 platform
            </p>
            <p class="text-gray-500 text-xs">
              Server time: {{ currentTime }}
              <span class="text-gray-400"> (k3).</span>
            </p>
          </div>

          <!-- Supported By Section -->
          <div>
            <p class="text-sm text-gray-600 mb-2">Supported by</p>
            <div class="flex justify-center items-center">
              <div class="flex items-center gap-x-10">
                <img src="./logos/arijit.jpg" alt="logo" class="w-28 h-28 rounded-full object-cover" />
                <div class="flex items-center">
                  <span class="text-4xl font-semibold text-gray-800">CREATOR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    }
  `]
})
export class Fooder {
  currentTime: string = '';

  ngOnInit() {
    this.updateTime();
    // Update time every second
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime() {
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    this.currentTime = `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
  }
}