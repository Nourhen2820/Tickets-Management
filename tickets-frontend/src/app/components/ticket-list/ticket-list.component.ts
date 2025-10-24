import { Component, OnInit } from '@angular/core';
import { TicketService, Ticket } from '../../services/ticket.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css'],
})
export class TicketListComponent implements OnInit {
  tickets: Ticket[] = [];
  filterStatus: string = '';

  // Pagination
  currentPage: number = 1;
  itemsPerPage: number = 4;

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.ticketService.getTickets(this.filterStatus || undefined).subscribe(data => {
      this.tickets = data;
      this.currentPage = 1; // reset à la première page après chaque filtrage
    });
  }

  onFilterChange(status: string) {
    this.filterStatus = status;
    this.load();
  }

  deleteTicket(id?: number) {
    if (!id) return;
    if (!confirm('Supprimer ce ticket ?')) return;
    this.ticketService.deleteTicket(id).subscribe(() => this.load());
  }

  // Pagination helpers
  get totalPages(): number {
    return Math.ceil(this.tickets.length / this.itemsPerPage);
  }

  get paginatedTickets(): Ticket[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.tickets.slice(start, start + this.itemsPerPage);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
