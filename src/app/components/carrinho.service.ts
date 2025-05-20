import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private itens: any[] = [];
  private itensSubject = new BehaviorSubject<any[]>(this.itens);
  itens$ = this.itensSubject.asObservable();  // observável exposto

  adicionarProduto(produto: any) {
    this.itens.push(produto);
    this.itensSubject.next([...this.itens]); // dispara atualização
  }

  removerProduto(index: number) {
    this.itens.splice(index, 1);
    this.itensSubject.next([...this.itens]);
  }

  limparCarrinho() {
    this.itens = [];
    this.itensSubject.next([...this.itens]);
  }

  listarProdutos() {
    return [...this.itens]; // ainda existe se quiser usar sem observable
  }
}
