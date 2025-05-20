import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarIluminacoesComponent } from './listar-iluminacoes.component';

describe('ListarIluminacoesComponent', () => {
  let component: ListarIluminacoesComponent;
  let fixture: ComponentFixture<ListarIluminacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarIluminacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarIluminacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
