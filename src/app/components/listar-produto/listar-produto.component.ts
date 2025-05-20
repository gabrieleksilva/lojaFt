import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css']
})
export class ListarProdutoComponent implements OnInit {
  produtoSelecionado: any = null;

  constructor(
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
    const item = {
      produtoId: produto.id,
      nome: produto.nome,
      marca: produto.marca,
      descQuantidade: produto.descQuantidade,
      vlrUnit: produto.vlrUnit // ou produto.vlrUnit, dependendo do nome no backend

    };

    this.http.post('http://localhost:8080/api/carrinho/adicionar', item).subscribe({
      next: () => {
        alert('Produto adicionado ao carrinho!');
        this.router.navigate(['/carrinho']);
      },
      error: (erro) => {
        console.error('Erro ao adicionar ao carrinho:', erro);
      }
    });
    alert('Produto adicionado ao carrinho com sucesso!');
    this.router.navigate(['/carrinho']);
  }

  deletarProduto(id: number): void {
    this.http.delete(`http://localhost:8080/loja/produtos/${id}`).subscribe({
      next: () => {
        alert('Produto excluído com sucesso!');
        this.produtoSelecionado = null;
      },
      error: (erro) => {
        console.error('Erro ao excluir produto:', erro);
      }
    });
  }

  carregarProdutoPorId(id: number): void {
    this.http.get<any>(`http://localhost:8080/loja/produtos/${id}`).subscribe({
      next: (resposta) => {
        this.produtoSelecionado = resposta;
      },
      error: (erro) => {
        console.error('Erro ao buscar produto por ID:', erro);
      }
    });
  }
}
