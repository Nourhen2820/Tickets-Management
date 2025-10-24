import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Ticket {
  id?: number;
  title: string;
  description?: string;
  status: 'ouvert'|'en_cours'|'resolu';
  created_at?: string;
  updated_at?: string;
}

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private apiUrl = 'http://127.0.0.1:8000/api/tickets';

  constructor(private http: HttpClient) { }

  getTickets(status?: string): Observable<Ticket[]> {
    let params = {};
    if (status) params = { params: new HttpParams().set('status', status) };
    return this.http.get<Ticket[]>(this.apiUrl, params);
  }

  getTicket(id: number) {
    return this.http.get<Ticket>(`${this.apiUrl}/${id}`);
  }

  createTicket(ticket: Partial<Ticket>) {
    return this.http.post<Ticket>(this.apiUrl, ticket);
  }

  updateTicket(id: number, ticket: Partial<Ticket>) {
    return this.http.put<Ticket>(`${this.apiUrl}/${id}`, ticket);
  }

  deleteTicket(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
