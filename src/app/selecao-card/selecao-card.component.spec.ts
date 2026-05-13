import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecaoCardComponent } from './selecao-card.component';

describe('SelecaoCardComponent', () => {
  let component: SelecaoCardComponent;
  let fixture: ComponentFixture<SelecaoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelecaoCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecaoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
