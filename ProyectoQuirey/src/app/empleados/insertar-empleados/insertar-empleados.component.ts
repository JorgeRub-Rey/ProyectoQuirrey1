import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EmpleadosService } from 'src/app/empleados.service';
@Component({
  selector: 'app-insertar-empleados',
  templateUrl: './insertar-empleados.component.html',
  styleUrls: ['./insertar-empleados.component.css'],
})
export class InsertarEmpleadosComponent {
  Matricula: number = 1;
  Puestos: number = 1;
  Perfil: number = 1;
  Usuario: number = 1;
  IdPersona: number = 1;

  constructor(
    public dialogRef: MatDialogRef<InsertarEmpleadosComponent>,
    private ticketsService: EmpleadosService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  insertar(): void {
    const nuevoTickets = {
      Matricula: this.Matricula,
      Puestos: this.Puestos,
      Perfil: this.Perfil,
      Usuario: this.Usuario,
      IdPersona: this.Usuario,
      // ...otros campos si los hay
    };

    this.ticketsService.insertarTickets(nuevoTickets).subscribe({
      next: (response) => {
        this.dialogRef.close(response);
        location.reload();
      },
      error: (error) => {
        console.error('Hubo un error al insertar el tickets', error);
      },
    });
  }
}
