import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private itens: any[] = [];

  adicionar(item: any) {
    this.itens.push(item);
  }

  obterItens(): any[] {
    return this.itens;
  }

  limpar() {
    this.itens = [];
  }
}
