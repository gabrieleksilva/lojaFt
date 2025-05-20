import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarLoucasComponent } from './listar-loucas.component';

describe('ListarLoucasComponent', () => {
  let component: ListarLoucasComponent;
  let fixture: ComponentFixture<ListarLoucasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarLoucasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarLoucasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
