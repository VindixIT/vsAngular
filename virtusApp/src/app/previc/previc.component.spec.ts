import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevicComponent } from './previc.component';

describe('PrevicComponent', () => {
  let component: PrevicComponent;
  let fixture: ComponentFixture<PrevicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
