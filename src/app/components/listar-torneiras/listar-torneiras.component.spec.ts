import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTorneirasComponent } from './listar-torneiras.component';

describe('ListarTorneirasComponent', () => {
  let component: ListarTorneirasComponent;
  let fixture: ComponentFixture<ListarTorneirasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTorneirasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTorneirasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
