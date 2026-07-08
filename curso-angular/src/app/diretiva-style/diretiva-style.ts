import { CommonModule, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-style',
  imports: [NgStyle, CommonModule],
  templateUrl: './diretiva-style.html',
  styleUrl: './diretiva-style.css',
})
export class DiretivaStyle {
  corFonte:string = 'yellow';
  corFundo:string = 'green';

  alterarEstilos():void{
    this.corFonte = this.corFonte === 'yellow' ? 'blue' : 'yellow';
    
    this.corFundo = this.corFonte === 'green' ? 'red' : 'green'

    this.estiloTexto = {
      'color': this.corFonte,
      'background-color': this.corFundo
    }
  }

  estiloTexto = {
    'color':this.corFonte,
    'background-color': this.corFundo
  }
}
