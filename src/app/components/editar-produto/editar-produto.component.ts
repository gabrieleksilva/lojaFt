import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {
  produto: any = {
    nome: '',
    marca: '',
    estiloDecoracao: '',
    corAmbiente: '',
    localInstalacao: '',
    prioridade: '',
    descQuantidade: '',
    tipoProduto: '',
    vlrUnit: 0
  };
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.carregarProduto();
  }

  carregarProduto() {
    this.http.get(`http://localhost:8080/loja/produtos/${this.id}`)
      .subscribe({
        next: (res: any) => this.produto = res,
        error: err => console.error('Erro ao carregar produto', err)
      });
  }

  salvar() {
    this.http.put(`http://localhost:8080/loja/produtos/${this.id}`, this.produto)
      .subscribe({
        next: () => {
          alert('Produto atualizado com sucesso!');
          this.router.navigate(['/listar-pisos']); // ou rota da lista
        },
        error: err => {
          console.error('Erro ao atualizar produto', err);
          alert('Erro ao atualizar produto.');
        }
      });
  }
}
