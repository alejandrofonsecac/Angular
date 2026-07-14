import { Component, signal } from '@angular/core';
import { ThemeComponent } from './ComponentEffect/effect';

@Component({
  selector: 'app-root',
  imports: [ThemeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('curso-angualr');
}
