import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditarDepartamento } from 'src/app/Models/puestos.models';
import { PuestosService } from 'src/app/puestos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-puestos',
  templateUrl: './editar-puestos.component.html',
  styleUrls: ['./editar-puestos.component.css'],
})
export class EditarPuestosComponent implements OnInit {
  departamento: EditarDepartamento;

  constructor(
    public dialogRef: MatDialogRef<EditarPuestosComponent>,
    private departamentoService: PuestosService,
    @Inject(MAT_DIALOG_DATA) public data: EditarDepartamento
  ) {
    // Clona los datos recibidos para evitar la mutación directa
    this.departamento = { ...data };
  }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardar(): void {
    // Validar campos obligatorios
    if (!this.departamento.Nombre || !this.departamento.Usuario) {
      Swal.fire({
        title: 'Por favor, complete todos los campos obligatorios.',
        //text: 'Por favor, complete todos los campos obligatorios.',
        icon: 'error',
      });
      return; // Detener la ejecución si hay campos obligatorios sin completar
    }

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
