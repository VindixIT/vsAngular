import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTipoNotaComponent } from './update-tipoNota.component';

describe('UpdateTipoNotaComponent', () => {
  let component: UpdateTipoNotaComponent;
  let fixture: ComponentFixture<UpdateTipoNotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTipoNotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTipoNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
