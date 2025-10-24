import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TicketFormulaireComponent } from './components/ticket-formulaire/ticket-formulaire.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone:true,
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tickets-frontend';
}
