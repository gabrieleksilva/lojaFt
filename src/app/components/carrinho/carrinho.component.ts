import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itens: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.carregarItensDoCarrinho();
  }

  carregarItensDoCarrinho() {
    this.http.get<any[]>('http://localhost:8080/api/carrinho').subscribe({
      next: (resposta) => {
        this.itens = resposta;
      },
      error: (erro) => {
        console.error('Erro ao buscar itens do carrinho:', erro);
      }
    });
  }

  calcularTotal(): number {
    return this.itens.reduce((total, item) => {
      return total + item.vlrUnit * (item.quantidade || 1); // Se o backend não envia `quantidade`, assume 1
    }, 0);
  }

  exportarCarrinho() {
    const linhas = this.itens.map(item =>
    `Produto: ${item.nome}\nMarca: ${item.marca}\nDescrição: ${item.descQuantidade}\nValor Unitário: R$ ${item.vlrUnit.toFixed(2)}\n`
  );

      const total = this.calcularTotal();
      linhas.push(`\n======================\nTOTAL: R$ ${total.toFixed(2)}\n`);

      const textoFinal = linhas.join('\n----------------------\n');

      const blob = new Blob([textoFinal], { type: 'text/plain;charset=utf-8' });

      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'carrinho.txt';
      link.click();
  }
}
