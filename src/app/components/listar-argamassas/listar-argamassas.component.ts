import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-listar-argamassas',
  templateUrl: './listar-argamassas.component.html',
  styleUrls: ['./listar-argamassas.component.css']
})
export class ListarArgamassasComponent implements OnInit {
  produtos: any[] = [];
  paginaAtual: number = 0;
  totalPaginas: number = 0;
  tamanhoPagina: number = 3;
  tipoProduto: string = "ARGAMASSAS";
  estaLogado: boolean = false;

  constructor(private http: HttpClient, private authService: LoginServiceService) {}

  ngOnInit(): void {
    this.carregarProdutos();
    this.estaLogado = this.authService.estaAutenticado();
  }

  carregarProdutos(): void {
  this.http.get<any>(`http://localhost:8080/loja/produtos/tipo?tipo=${this.tipoProduto}&page=${this.paginaAtual}&size=${this.tamanhoPagina}`)
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

