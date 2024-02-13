import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Editarempleados } from 'src/app/Models/empleados.models';
import { EmpleadosService } from 'src/app/empleados.service';

@Component({
  selector: 'app-editar-empleados',
  templateUrl: './editar-empleados.component.html',
  styleUrls: ['./editar-empleados.component.css'],
})
export class EditarEmpleadosComponent implements OnInit {
  tickets: Editarempleados;
  constructor(
    public dialogRef: MatDialogRef<EditarEmpleadosComponent>,
    private ticketsService: EmpleadosService,
    @Inject(MAT_DIALOG_DATA) public data: Editarempleados
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
      },
      error: (error) => {
        // Manejar errores aquí
      },
    });
  }
}
