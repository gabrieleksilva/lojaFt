import { CarrinhoService } from './../carrinho.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginServiceService } from '../login-service.service';


@Component({
  selector: 'app-listar-pisos',
  templateUrl: './listar-pisos.component.html',
  styleUrls: ['./listar-pisos.component.css']
})
export class ListarPisosComponent implements OnInit {
  produtos: any[] = [];
  paginaAtual: number = 0;
  totalPaginas: number = 0;
  tamanhoPagina: number = 3;
  tipo: string = "PISOS";
  estaLogado: boolean = false;

  constructor(
    private carrinhoService: CarrinhoService,
    private http: HttpClient,
    private authService: LoginServiceService
  ) {}

  ngOnInit(): void {
    this.carregarProdutos();
    this.estaLogado = this.authService.estaAutenticado();
  }

  adicionarAoCarrinho(produto: any) {
    this.carrinhoService.adicionar({
      nome: produto.nome,
      quantidade: 1,
      preco: produto.preco
    });
  }

  carregarProdutos(): void {
    this.http.get<any>(`http://localhost:8080/loja/produtos/tipo?tipo=${this.tipo}&page=${this.paginaAtual}&size=${this.tamanhoPagina}`)
      .subscribe({
        next: (resposta) => {
          this.produtos = resposta.content;
          this.totalPaginas = resposta.totalPages;
        },
        error: (erro) => {
          console.error('Erro ao buscar produtos:', erro);
        }
      });
  }

  proximaPagina(): void {
    if (this.paginaAtual + 1 < this.totalPaginas) {
      this.paginaAtual++;
      this.carregarProdutos();
    }
  }

  paginaAnterior(): void {
    if (this.paginaAtual > 0) {
      this.paginaAtual--;
      this.carregarProdutos();
    }
  }
}
