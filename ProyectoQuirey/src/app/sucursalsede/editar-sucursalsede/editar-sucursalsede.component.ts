import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditarSucursalsede } from 'src/app/Models/sucursalsede.models';
import { SucursalsedeService } from 'src/app/sucursalsede.service';

@Component({
  selector: 'app-editar-sucursalsede',
  templateUrl: './editar-sucursalsede.component.html',
  styleUrls: ['./editar-sucursalsede.component.css'],
})
export class EditarSucursalsedeComponent implements OnInit {
  tickets: EditarSucursalsede;
  constructor(
    public dialogRef: MatDialogRef<EditarSucursalsedeComponent>,
    private ticketsService: SucursalsedeService,
    @Inject(MAT_DIALOG_DATA) public data: EditarSucursalsede
  ) {
    // Clona los datos recibidos para evitar la mutación directa
    this.tickets = { ...data };
  }

  ngOnInit(): void {}

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
      },
    });
  }
}
