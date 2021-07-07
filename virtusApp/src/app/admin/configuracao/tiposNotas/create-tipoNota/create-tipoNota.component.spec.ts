import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTipoNotaComponent } from './create-tipoNota.component';

describe('CreateTipoNotaComponent', () => {
  let component: CreateTipoNotaComponent;
  let fixture: ComponentFixture<CreateTipoNotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTipoNotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTipoNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
