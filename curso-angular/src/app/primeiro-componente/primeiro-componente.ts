import { Component } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  imports: [],
  templateUrl: './primeiro-componente.html',
  styleUrl: './primeiro-componente.css',
})
export class PrimeiroComponente {
  name:string = 'Jorge';
  media:number = 8;
  pessoa = {
    nome: 'Jorge',
    idade: 18
  }

  mensagem():string{
    return "Hello World"
  }
}
