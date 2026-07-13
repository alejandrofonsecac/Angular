import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {
  counterTask = signal(0);

  incrementTask():void{
    this.counterTask.update(qtd => qtd + 1); 
  }
}
