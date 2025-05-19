import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-login',
  templateUrl: './cadastro-login.component.html',
  styleUrls: ['./cadastro-login.component.css']
})
export class CadastroLoginComponent {

form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: [''],
      senha: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.http.post('http://localhost:8080/loja/usuarios', this.form.value).subscribe({
        next: () => {
          alert('Usuario cadastrado com sucesso!');
          this.form.reset();
        },
        error: err => {
          console.error(err);
          alert('Erro ao cadastrar usuario.');
        }
      });
    }
  }
}

