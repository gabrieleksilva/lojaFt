import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../components/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  estaLogado: boolean = false;
  search: string = '';

  constructor(
    private searchService: SearchService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Verifica se há token no localStorage
    this.estaLogado = !!localStorage.getItem('token');
  }

  buscar(): void {
    const termo = this.search.trim();
    if (termo) {
      this.searchService.setSearchTerm(termo);
      this.router.navigate(['/search']);
    }
  }

  logout(): void {
    localStorage.removeItem('token'); // ou sessionStorage.removeItem
    this.estaLogado = false;
    this.router.navigate(['/login']);
  }
}
