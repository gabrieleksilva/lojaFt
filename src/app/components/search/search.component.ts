import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  produtos: any[] = [];
  paginaAtual: number = 0;
  totalPaginas: number = 0;
  tamanhoPagina: number = 3;
  search: string = '';

  constructor(private http: HttpClient, private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchService.searchTerm$.subscribe((termo) => {
      this.search = termo;
      this.paginaAtual = 0;
      this.carregarProdutos();
    });

    this.carregarProdutos(); // exibe resultados iniciais, se quiser
  }

  carregarProdutos(): void {
    this.http.get<any>(
      `http://localhost:8080/loja/produtos/search?page=${this.paginaAtual}&size=${this.tamanhoPagina}&search=${this.search}`
    ).subscribe({
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
