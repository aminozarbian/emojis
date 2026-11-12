import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly links = [
    { path: '/element', label: 'emoji-picker-element' },
    { path: '/ngx-mart', label: 'ngx-emoji-mart-next' },
    { path: '/emoji-mart', label: 'emoji-mart' },
  ] as const;
}
