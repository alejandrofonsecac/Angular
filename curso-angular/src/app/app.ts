import { Component, signal } from '@angular/core';
import { DiretivaStyle } from './diretiva-style/diretiva-style';
import { ControleFluxo } from "./controle-fluxo/controle-fluxo";

@Component({
  selector: 'app-root',
  imports: [DiretivaStyle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('curso-angualr');
}
