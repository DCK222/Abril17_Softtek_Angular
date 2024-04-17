import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CestaHijoComponent } from './cesta-hijo.component';

describe('CestaHijoComponent', () => {
  let component: CestaHijoComponent;
  let fixture: ComponentFixture<CestaHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CestaHijoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CestaHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
