import { Component } from '@angular/core';
import { SearchService } from '../../components/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  search: string = '';

  constructor(
    private searchService: SearchService,
    private router: Router
  ) {}

  buscar(): void {
    const termo = this.search.trim();
    if (termo) {
      this.searchService.setSearchTerm(termo);
      this.router.navigate(['/search']);
    }
  }
}
