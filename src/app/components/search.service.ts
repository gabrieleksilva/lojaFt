import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  // Comportamento reativo com valor inicial vazio
  private searchTermSubject = new BehaviorSubject<string>('');

  // Observable para os componentes escutarem mudanças
  searchTerm$ = this.searchTermSubject.asObservable();

  // Atualiza o valor da busca
  setSearchTerm(term: string): void {
    this.searchTermSubject.next(term);
  }
}
