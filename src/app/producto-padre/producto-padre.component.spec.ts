import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoPadreComponent } from './producto-padre.component';

describe('ProductoPadreComponent', () => {
  let component: ProductoPadreComponent;
  let fixture: ComponentFixture<ProductoPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoPadreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductoPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
