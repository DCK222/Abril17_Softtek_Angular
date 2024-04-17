import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionarHijoComponent } from './seleccionar-hijo.component';

describe('SeleccionarHijoComponent', () => {
  let component: SeleccionarHijoComponent;
  let fixture: ComponentFixture<SeleccionarHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeleccionarHijoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeleccionarHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
