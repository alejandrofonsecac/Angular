import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-reativo',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-reativo.html',
  styleUrl: './formulario-reativo.css',
})
export class FormularioReativo {
  pessoa = new FormGroup({
    name: new FormControl(),
    age: new FormControl()
  });
}
