import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomiciliarioComponent } from './domiciliario.component';

describe('DomiciliarioComponent', () => {
  let component: DomiciliarioComponent;
  let fixture: ComponentFixture<DomiciliarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomiciliarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomiciliarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
