import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditarDetallePerfil } from 'src/app/Models/detalleperfil.models';
import { DetalleperfilService } from 'src/app/detalleperfil.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-detalleperfil',
  templateUrl: './editar-detalleperfil.component.html',
  styleUrls: ['./editar-detalleperfil.component.css'],
})
export class EditarDetalleperfilComponent implements OnInit {
  detalleperfil: EditarDetallePerfil;

  constructor(
    public dialogRef: MatDialogRef<EditarDetalleperfilComponent>,
    private detalleperfilService: DetalleperfilService,
    @Inject(MAT_DIALOG_DATA) public data: EditarDetallePerfil
  ) {
    // Clona los datos recibidos para evitar la mutación directa
    this.detalleperfil = { ...data };
  }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardar(): void {
    // Validar campos obligatorios
    if (
      !this.detalleperfil.IdPerfil ||
      !this.detalleperfil.IdModulo ||
      !this.detalleperfil.Usuario
    ) {
      Swal.fire({
        title: 'Por favor completa todos los campos obligatorios',
        // text: 'Por favor completa todos los campos obligatorios',
        icon: 'error',
      });
      return;
    }

    this.detalleperfilService
      .actualizarDetalleperfil(this.detalleperfil)
      .subscribe({
        next: (response) => {
          // Cerrar la modal después de guardar los cambios
          this.dialogRef.close();
          // location.reload();
          Swal.fire({
            title: 'Se han modificado correctamente los datos!',
            icon: 'success',
          }).then((result) => {
            if (result.isConfirmed) {
              location.reload();
            }
          });
        },
        error: (error) => {
          // Manejar errores aquí
        },
      });
  }
}
