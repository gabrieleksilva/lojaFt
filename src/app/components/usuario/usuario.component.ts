import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent  {

 form: FormGroup;

   constructor(
  private fb: FormBuilder,
  private http: HttpClient,
  private router: Router,
  private authService: LoginServiceService
) {
  this.form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', Validators.required]
  });
}

   onSubmit() {
  if (this.form.valid) {
    this.http.post<any>('http://localhost:8080/loja/login', this.form.value).subscribe({
      next: (response) => {
        const token = response.token;
        if (token) {
          this.authService.login(token); // salva o token no localStorage
          alert('Usuário permitido!');
          this.router.navigate(['/home']); // redireciona para a tela onde aparece o botão
        } else {
          alert('Token não recebido!');
        }
      },
      error: err => {
        console.error(err);
        alert('Usuário inválido.');
      }
    });
  }
}

 }
