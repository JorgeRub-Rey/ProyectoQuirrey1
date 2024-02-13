import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DetalleperfilService } from 'src/app/detalleperfil.service';

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
    const nuevoCliente = {
      IdPerfil: this.IdPerfil,
      IdModulo: this.IdModulo,
      Usuario: this.Usuario,
      // ...otros campos si los hay
    };

    this.detalleperfilService.insertarDetalleperfil(nuevoCliente).subscribe({
      next: (response) => {
        this.dialogRef.close(response);
      },
      error: (error) => {
        console.error('Hubo un error al insertar el cliente', error);
      },
    });
  }
}
