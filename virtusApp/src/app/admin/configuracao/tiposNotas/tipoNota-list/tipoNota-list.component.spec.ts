import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoNotaListComponent } from './tipoNota-list.component';

describe('TipoNotaListComponent', () => {
  let component: TipoNotaListComponent;
  let fixture: ComponentFixture<TipoNotaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoNotaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoNotaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
