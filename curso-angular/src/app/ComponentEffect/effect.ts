import { Component, effect, signal } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-theme',
  imports: [NgStyle],
  templateUrl: './effect.html',
  styleUrl: './effect.css'
})
export class ThemeComponent {

  tema = signal<'light' | 'dark'>('light');

  constructor() {
    effect(() => {
      console.log(`Tema atual: ${this.tema()}`);
    });
  }

  alternarTema() {
    this.tema.update(temaAtual =>
      temaAtual === 'light' ? 'dark' : 'light'
    );
  }

}