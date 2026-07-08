import { Component, signal } from '@angular/core';
import { DiretivaClass } from './diretiva-class/diretiva-class';

@Component({
  selector: 'app-root',
  imports: [DiretivaClass],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('curso-angualr');
}
