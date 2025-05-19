import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent  {

 form: FormGroup;

   constructor(private fb: FormBuilder, private http: HttpClient) {
     this.form = this.fb.group({
       email: ['', [Validators.required, Validators.email]],
       senha: ['', Validators.required]
     });
   }

   onSubmit() {
     if (this.form.valid) {
       this.http.post('http://localhost:8080/loja/login', this.form.value).subscribe({
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
