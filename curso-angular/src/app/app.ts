import { Component, signal } from '@angular/core';
import { PrimeiroComponente } from "./primeiro-componente/primeiro-componente";

@Component({
  selector: 'app-root',
  imports: [PrimeiroComponente],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('curso-angualr');
}
