import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css']
})
export class ListarProdutoComponent implements OnInit {
  produtoSelecionado: any = null;  // para armazenar o produto buscado

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam);
    if (id) {
      this.carregarProdutoPorId(id);
    }
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
