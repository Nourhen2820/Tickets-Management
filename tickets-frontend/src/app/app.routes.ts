import { Routes } from '@angular/router';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { TicketFormulaireComponent } from './components/ticket-formulaire/ticket-formulaire.component';

export const routes: Routes = [
    { path: '', component: TicketListComponent },
    { path: 'create', component: TicketFormulaireComponent },
     { path: 'edit/:id', component: TicketFormulaireComponent},
    

];
