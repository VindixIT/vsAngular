import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePilarComponent } from './update-pilar.component';

describe('UpdatePilarComponent', () => {
  let component: UpdatePilarComponent;
  let fixture: ComponentFixture<UpdatePilarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePilarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
