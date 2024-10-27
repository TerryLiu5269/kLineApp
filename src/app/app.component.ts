import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kLineApp';
}
export const PRICE_DEFAULT_COLOR = 'gray';
export const PRICE_RISING_COLOR = '#49de4e';
export const PRICE_FALLING_COLOR = '#ff3030';
