import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarGabinetesComponent } from './listar-gabinetes.component';

describe('ListarGabinetesComponent', () => {
  let component: ListarGabinetesComponent;
  let fixture: ComponentFixture<ListarGabinetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarGabinetesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarGabinetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
