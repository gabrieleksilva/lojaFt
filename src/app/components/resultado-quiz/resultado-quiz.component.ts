import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultado-quiz',
  templateUrl: './resultado-quiz.component.html',
})
export class ResultadoQuizComponent {
  produtos: any[] = [];

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.produtos = navigation?.extras?.state?.['produtos'] || [];
  }
}
