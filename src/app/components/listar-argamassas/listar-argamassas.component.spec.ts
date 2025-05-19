import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarArgamassasComponent } from './listar-argamassas.component';

describe('ListarArgamassasComponent', () => {
  let component: ListarArgamassasComponent;
  let fixture: ComponentFixture<ListarArgamassasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarArgamassasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarArgamassasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
