import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditarTickets } from 'src/app/Models/tickets.models';
import { TicketsService } from 'src/app/tickets.service';

@Component({
  selector: 'app-editar-tickets',
  templateUrl: './editar-tickets.component.html',
  styleUrls: ['./editar-tickets.component.css']
})
export class EditarTicketsComponent implements OnInit {

  tickets: EditarTickets;
  constructor(
    public dialogRef: MatDialogRef<EditarTicketsComponent>,
    private ticketsService: TicketsService,
    @Inject(MAT_DIALOG_DATA) public data: EditarTickets
    
  ) {
    // Clona los datos recibidos para evitar la mutación directa
    this.tickets = {...data};
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardar(): void {
    this.ticketsService.actualizarTickets(this.tickets).subscribe({
      next: (response) => {
        // Cerrar la modal y posiblemente actualizar la tabla
        this.dialogRef.close(this.tickets);
        location.reload();
      },
      error: (error) => {
        // Manejar errores aquí
      }
    });
  }

}
