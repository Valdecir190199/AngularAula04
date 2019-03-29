

export class Estado{
  private nome : string;
  private sigla : string;
  private qtde : number;

  getQtde():number {
    return this.qtde;
  }

  setQtde(qtde:number) : void{
    this.qtde = qtde;
  }


  getNome():string {
    return this.nome;
  }

  setNome(nome:string) : void{
    this.nome = nome;
  }

  getSigla() : string {
    return this.sigla;
  }

  setSigla(sigla:string) : void {
    this.sigla = sigla;
  }
}
