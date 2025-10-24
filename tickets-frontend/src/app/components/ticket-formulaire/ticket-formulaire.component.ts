import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TicketService } from '../../services/ticket.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  selector: 'app-ticket-formulaire',
  templateUrl: './ticket-formulaire.component.html',
  styleUrls: ['./ticket-formulaire.component.css'],
})
export class TicketFormulaireComponent implements OnInit {
  form!: FormGroup;
  id?: number;
  isEdit = false;

  // Notification
  notification: { type: 'success' | 'error'; message: string } | null = null;

  constructor(
    private fb: FormBuilder,
    private ticketService: TicketService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      status: ['ouvert', Validators.required],
    });

    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.isEdit = true;
      this.ticketService.getTicket(this.id).subscribe((t) => {
        this.form.patchValue(t);
      });
    }
  }

  submit() {
    if (this.form.invalid) return;

    const request = this.isEdit && this.id
      ? this.ticketService.updateTicket(this.id, this.form.value)
      : this.ticketService.createTicket(this.form.value);

    request.subscribe({
      next: () => {
        this.showNotification('success', '✅ Ticket enregistré avec succès !');
        setTimeout(() => this.router.navigate(['/']), 2000);
      },
      error: () => {
        this.showNotification('error', '❌ Erreur lors de l’enregistrement du ticket.');
      },
    });
  }

  showNotification(type: 'success' | 'error', message: string) {
    this.notification = { type, message };
    setTimeout(() => (this.notification = null), 2500);
  }
}
