import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateComponenteComponent } from './update-componente.component';

describe('UpdateCicloComponent', () => {
  let component: UpdateComponenteComponent;
  let fixture: ComponentFixture<UpdateComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
