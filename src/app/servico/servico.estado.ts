import { Estado } from '../entidades/estado';
import { Injectable } from '@angular/core';


@Injectable()
export class ServicoEstado{

  listaEstado = new Array<Estado>();


  adicionar(estado : Estado) : void {
    this.listaEstado.push(estado);

  }

  excluir(i:number) : void {
    this.listaEstado.splice(i,1);
  }

  alterar(i:number) : void{

    this.listaEstado.splice(i,1);
  }
}
