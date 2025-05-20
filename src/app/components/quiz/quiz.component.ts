import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  filtro = {
    estilo: '',
    cor: '',
    local: '',
    prioridade: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const { estilo, cor, local, prioridade } = this.filtro;

    const url = `http://localhost:8080/loja/quiz?estilo=${estilo}&cor=${cor}&local=${local}&prioridade=${prioridade}`;

    this.http.get<any[]>(url).subscribe({
      next: (produtos) => {
        this.router.navigate(['/resultado'], { state: { produtos } });
      },
      error: (err) => {
        console.error('Erro ao enviar quiz', err);
      }
    });
  }
}
