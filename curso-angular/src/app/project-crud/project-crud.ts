import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';

@Component({
  selector: 'app-project-crud',
  imports: [ReactiveFormsModule],
  templateUrl: './project-crud.html',
  styleUrl: './project-crud.css',
})
export class ProjectCrud {
  btnCadastrar:boolean = true;

  // Objeto do tipo FormGroup
  pessoa = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(3)]),
    age: new FormControl('',[Validators.required, Validators.min(0), Validators.max(120)]),
    city: new FormControl('',[Validators.required, Validators.minLength(3)]),
  });

  //Vetor para armazenar pessoas
  vetor:Pessoa[] = [];

  //indice da pessoa selecionada
  indiceDaPessoaSelecionada:number = -1;

  //Metodo para efetuar o cadastro
  cadastrar():void{
    this.vetor.push(this.pessoa.value as Pessoa);
    this.pessoa.reset();
  }

  //Metodo para selecionar uma pessao especifica
  selecionar(indice:number):void{
    this.indiceDaPessoaSelecionada = indice;
    this.pessoa.get('name')?.setValue(this.vetor[indice].name || '');
    this.pessoa.get('age')?.setValue(this.vetor[indice].age?.toString() || '');
    this.pessoa.get('city')?.setValue(this.vetor[indice].city || '');

    this.btnCadastrar = false;
  }

  //Metodo para cancelar as ações de alteração e remoção
  cancelar():void{
    this.pessoa.reset();
    this.indiceDaPessoaSelecionada = -1;
    this.btnCadastrar = true;
  }

  //Metodo para alterar dados
  alterar():void{
    this.vetor[this.indiceDaPessoaSelecionada] = this.pessoa.value as Pessoa;
    this.cancelar();
  }

  //Metodo para remover pessoas
  remover():void{
    this.vetor.splice(this.indiceDaPessoaSelecionada, 1);
    this.cancelar();
  }
}
