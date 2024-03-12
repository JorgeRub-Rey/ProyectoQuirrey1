import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditarExistencias } from 'src/app/Models/existencias.models';
import { ExistenciasService } from 'src/app/existencias.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-existencias',
  templateUrl: './editar-existencias.component.html',
  styleUrls: ['./editar-existencias.component.css'],
})
export class EditarExistenciasComponent implements OnInit {
  departamento: EditarExistencias;

  constructor(
    public dialogRef: MatDialogRef<EditarExistenciasComponent>,
    private departamentoService: ExistenciasService,
    @Inject(MAT_DIALOG_DATA) public data: EditarExistencias
  ) {
    // Clona los datos recibidos para evitar la mutación directa
    this.departamento = { ...data };
  }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardar(): void {
    // Verificar si algún campo obligatorio está vacío
    if (
      !this.departamento.Codigo ||
      !this.departamento.IdAlmacen ||
      !this.departamento.Cantidad ||
      !this.departamento.Estatus
    ) {
      // Mostrar un mensaje de error utilizando SweetAlert2
      Swal.fire({
        icon: 'error',
        title: 'Por favor, complete todos los campos obligatorios.',
      });
      return;
    }

    // Realizar la actualización del departamento
    this.departamentoService
      .actualizarDepartamento(this.departamento)
      .subscribe({
        next: (response) => {
          // Cerrar la modal y posiblemente actualizar la tabla
          this.dialogRef.close(this.departamento);

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
