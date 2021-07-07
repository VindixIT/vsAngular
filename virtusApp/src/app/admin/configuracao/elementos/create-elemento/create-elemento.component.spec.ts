import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateElementoComponent } from './create-elemento.component';

describe('CreateElementoComponent', () => {
  let component: CreateElementoComponent;
  let fixture: ComponentFixture<CreateElementoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateElementoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateElementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
