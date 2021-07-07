import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCicloComponent } from './create-ciclo.component';

describe('CreateCicloComponent', () => {
  let component: CreateCicloComponent;
  let fixture: ComponentFixture<CreateCicloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCicloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCicloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
