import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TicketsService } from 'src/app/tickets.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-insertar-tickets',
  templateUrl: './insertar-tickets.component.html',
  styleUrls: ['./insertar-tickets.component.css'],
})
export class InsertarTicketsComponent {
  IdSucursal: number = 0;
  IdCliente: number = 0;
  IdVendedor: number = 0;
  UsuarioActualiza: number = 1;

  constructor(
    public dialogRef: MatDialogRef<InsertarTicketsComponent>,
    private ticketsService: TicketsService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  insertar(): void {
    // Simple validation for required fields
    if (!this.IdSucursal || !this.IdCliente || !this.IdVendedor) {
      Swal.fire({
        title: 'Por favor, completa todos los campos obligatorios.',

        icon: 'error',
      });
      return;
    }

    const nuevoTickets = {
      IdSucursal: this.IdSucursal,
      IdCliente: this.IdCliente,
      IdVendedor: this.IdVendedor,
      UsuarioActualiza: this.UsuarioActualiza,
      // ...otros campos si los hay
    };

    this.ticketsService.insertarTickets(nuevoTickets).subscribe({
      next: (response) => {
        this.dialogRef.close(response);

        Swal.fire({
          title: 'Se han insertado correctamente los datos!',
          icon: 'success',
        }).then((result) => {
          if (result.isConfirmed) {
            location.reload();
          }
        });
      },
      error: (error) => {
        console.error('Hubo un error al insertar el tickets', error);
      },
    });
  }
}
