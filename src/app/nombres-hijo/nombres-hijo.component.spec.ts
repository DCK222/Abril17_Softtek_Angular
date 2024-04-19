import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombresHijoComponent } from './nombres-hijo.component';

describe('NombresHijoComponent', () => {
  let component: NombresHijoComponent;
  let fixture: ComponentFixture<NombresHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NombresHijoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NombresHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
