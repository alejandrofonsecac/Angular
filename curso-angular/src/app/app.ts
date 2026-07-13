import { Component, signal } from '@angular/core';
import { ComputedSignal } from './computed-signal/computed-signal';
@Component({
  selector: 'app-root',
  imports: [ComputedSignal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('curso-angualr');
}
