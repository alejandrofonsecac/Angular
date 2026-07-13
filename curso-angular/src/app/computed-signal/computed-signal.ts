import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-computed-signal',
  imports: [],
  templateUrl: './computed-signal.html',
  styleUrl: './computed-signal.css',
})
export class ComputedSignal {
  tarefas = signal([
    {titulo: 'Backend', concluidas: true},
    {titulo: 'Angular', concluidas: false},
    {titulo: 'Java', concluidas: true}
  ]);

  totalTarefas = computed(() => this.tarefas().length);

  tarefasConcluidas = computed(() => 
    this.tarefas().filter(t => t.concluidas).length
  );

  percentual = computed(() => {
    const total = this.totalTarefas();
    const concluidas = this.tarefasConcluidas();

    if(total === 0) return 0;
    return (concluidas/total) * 100;
  })
}