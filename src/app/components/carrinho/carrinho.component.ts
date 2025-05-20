import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho: any[] = [];

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit(): void {
    this.carrinhoService.itens$.subscribe(itens => {
      this.itensCarrinho = itens;
    });
  }

  remover(index: number) {
    this.carrinhoService.removerProduto(index);
  }

  limpar() {
    this.carrinhoService.limparCarrinho();
  }
}
