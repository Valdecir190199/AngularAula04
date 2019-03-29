import { Component } from '@angular/core';
import { Estado } from '../entidades/estado';
import { ServicoEstado } from '../servico/servico.estado';

@Component({
  selector: 'vetor-component'
  ,templateUrl: 'vetores.component.html'
  ,styleUrls: ['vetores.component.html']
})
export class VetoresComponent{
  estado: Estado = new Estado();
  listaEstado = this.servico.listaEstado;

  constructor(private servico : ServicoEstado){
  }

  adicionar() : void {
    this.servico.adicionar(this.estado);
    this.estado = new Estado();
  }

  excluir(i:number) : void {
    this.servico.excluir(i);
  }

  alterar(i:number) : void{
    this.servico.alterar(i);
  }

  pegarEstado(i:number) : void {
    this.estado = this.listaEstado[i];
  }




}
