import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilarListComponent } from './pilar-list.component';

describe('PilarListComponent', () => {
  let component: PilarListComponent;
  let fixture: ComponentFixture<PilarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilarListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PilarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
