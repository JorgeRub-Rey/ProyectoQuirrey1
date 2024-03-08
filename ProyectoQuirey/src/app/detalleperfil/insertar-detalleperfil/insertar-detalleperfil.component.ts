import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DetalleperfilService } from 'src/app/detalleperfil.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-insertar-detalleperfil',
  templateUrl: './insertar-detalleperfil.component.html',
  styleUrls: ['./insertar-detalleperfil.component.css'],
})
export class InsertarDetalleperfilComponent {
  IdPerfil: number = 1;
  IdModulo: number = 1;
  Usuario: number = 1;

  constructor(
    public dialogRef: MatDialogRef<InsertarDetalleperfilComponent>,
    private detalleperfilService: DetalleperfilService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  insertar(): void {
    // Validar campos obligatorios
    if (!this.IdPerfil || !this.IdModulo || !this.Usuario) {
      Swal.fire({
        title: 'Por favor completa todos los campos obligatorios',
        // text: 'Por favor completa todos los campos obligatorios',
        icon: 'error',
      });
      return;
    }

    const nuevoCliente = {
      IdPerfil: this.IdPerfil,
      IdModulo: this.IdModulo,
      Usuario: this.Usuario,
      // ...otros campos si los hay
    };

    this.detalleperfilService.insertarDetalleperfil(nuevoCliente).subscribe({
      next: (response) => {
        this.dialogRef.close(response);
        // location.reload();
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
        console.error('Hubo un error al insertar el cliente', error);
      },
    });
  }
}
