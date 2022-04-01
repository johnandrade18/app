import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenDeServicioComponent } from './orden-de-servicio.component';

describe('OrdenDeServicioComponent', () => {
  let component: OrdenDeServicioComponent;
  let fixture: ComponentFixture<OrdenDeServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenDeServicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenDeServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
