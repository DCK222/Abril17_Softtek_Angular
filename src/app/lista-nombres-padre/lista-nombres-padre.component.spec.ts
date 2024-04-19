import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNombresPadreComponent } from './lista-nombres-padre.component';

describe('ListaNombresPadreComponent', () => {
  let component: ListaNombresPadreComponent;
  let fixture: ComponentFixture<ListaNombresPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaNombresPadreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaNombresPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
