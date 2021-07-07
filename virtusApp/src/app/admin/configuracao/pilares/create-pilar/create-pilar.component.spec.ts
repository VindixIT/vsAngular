import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePilarComponent } from './create-pilar.component';

describe('CreatePilarComponent', () => {
  let component: CreatePilarComponent;
  let fixture: ComponentFixture<CreatePilarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePilarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
