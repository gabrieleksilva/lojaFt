import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent {
  form: FormGroup;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      nome: [''],
      marca: [''],
      decoracao: [''],
      cor: [''],
      local: [''],
      prioridade: [''],
      descQuantidade: [''],
      vlrUnit: [''],
      tipo: ['']
    });
  }

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {

    const produtoDTO = {
      nome: this.form.value.nome,
      marca: this.form.value.marca,
      estiloDecoracao: this.form.value.decoracao,
      corAmbiente: this.form.value.cor,
      localInstalacao: this.form.value.local,
      prioridade: this.form.value.prioridade,
      descQuantidade: this.form.value.descQuantidade,
      vlrUnit: parseFloat(this.form.value.vlrUnit),
      tipoProduto: this.form.value.tipo
    };

    const formData = new FormData();
    formData.append('produto', new Blob([JSON.stringify(produtoDTO)], { type: 'application/json' }));
    if (this.selectedFile) {
      formData.append('imagem', this.selectedFile);
    }

    this.http.post('http://localhost:8080/loja/produtos', formData).subscribe({
      next: () => alert('Produto cadastrado com sucesso!'),
      error: err => alert('Erro ao cadastrar produto: ' + err.message)
    });
  }
}
