import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensagem: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.http.post('http://localhost:8080/loja/contato', this.form.value).subscribe({
        next: () => {
          alert('Mensagem enviada com sucesso!');
          this.form.reset();
        },
        error: err => {
          console.error(err);
          alert('Erro ao enviar a mensagem.');
        }
      });
    }
  }
}
