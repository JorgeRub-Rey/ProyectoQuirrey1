import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SucursalsedeService } from 'src/app/sucursalsede.service';
@Component({
  selector: 'app-insertar-sucursalsede',
  templateUrl: './insertar-sucursalsede.component.html',
  styleUrls: ['./insertar-sucursalsede.component.css'],
})
export class InsertarSucursalsedeComponent {
  Nombre: string = '';
  Ubicacion: string = '';
  Usuario: number = 1;

  constructor(
    public dialogRef: MatDialogRef<InsertarSucursalsedeComponent>,
    private ticketsService: SucursalsedeService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  insertar(): void {
    const nuevoTickets = {
      Nombre: this.Nombre,
      Ubicacion: this.Ubicacion,
      Usuario: this.Usuario,
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
