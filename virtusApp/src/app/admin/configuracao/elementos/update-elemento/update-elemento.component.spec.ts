import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateElementoComponent } from './update-elemento.component';

describe('UpdateElementoComponent', () => {
  let component: UpdateElementoComponent;
  let fixture: ComponentFixture<UpdateElementoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateElementoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateElementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
