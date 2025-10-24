import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketFormulaireComponent } from './ticket-formulaire.component';

describe('TicketFormulaireComponent', () => {
  let component: TicketFormulaireComponent;
  let fixture: ComponentFixture<TicketFormulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketFormulaireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
