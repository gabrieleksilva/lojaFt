import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPisosComponent } from './listar-pisos.component';

describe('ListarPisosComponent', () => {
  let component: ListarPisosComponent;
  let fixture: ComponentFixture<ListarPisosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPisosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
