import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesSeleccionarPadreComponent } from './opciones-seleccionar-padre.component';

describe('OpcionesSeleccionarPadreComponent', () => {
  let component: OpcionesSeleccionarPadreComponent;
  let fixture: ComponentFixture<OpcionesSeleccionarPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpcionesSeleccionarPadreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpcionesSeleccionarPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
