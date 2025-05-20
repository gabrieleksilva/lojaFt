import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listar-gabinetes',
  templateUrl: './listar-gabinetes.component.html',
  styleUrls: ['./listar-gabinetes.component.css']
})
export class ListarGabinetesComponent implements OnInit {
  produtos: any[] = [];
  paginaAtual: number = 0;
  totalPaginas: number = 0;
  tamanhoPagina: number = 3;
  tipo: string = "GABINETES";

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.carregarProdutos();
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


