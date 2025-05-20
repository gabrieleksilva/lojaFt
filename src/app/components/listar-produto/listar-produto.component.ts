import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service'; // ajuste o caminho se necessário


@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css']
})
export class ListarProdutoComponent implements OnInit {
  produtoSelecionado: any = null;  // para armazenar o produto buscado

constructor(
  private carrinhoService: CarrinhoService,
  private http: HttpClient,
  private route: ActivatedRoute,
  private router: Router
) {}
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam);
    if (id) {
      this.carregarProdutoPorId(id);
    }
  }

  adicionarAoCarrinho(produto: any): void {
  this.carrinhoService.adicionarProduto(produto);
  alert('Produto adicionado ao carrinho!');
  this.router.navigate(['/carrinho']);
}
deletarProduto(id: number): void {
  this.http.delete(`http://localhost:8080/loja/produtos/${id}`).subscribe({
    next: () => {
      alert('Produto excluído com sucesso!');
      this.produtoSelecionado = null;
      //this.router.navigate(['/listar-pisos']);
    },
    error: (erro) => {
      console.error('Erro ao excluir produto:', erro);
    }
  });
}

  carregarProdutoPorId(id: number): void {
    this.http.get<any>(`http://localhost:8080/loja/produtos/${id}`)
      .subscribe({
        next: (resposta) => {
          this.produtoSelecionado = resposta;
        },
        error: (erro) => {
          console.error('Erro ao buscar produto por ID:', erro);
        }
      });
  }

  

}
