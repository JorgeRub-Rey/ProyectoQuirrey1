import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditarDepartamento } from 'src/app/Models/modulos.models';
import { ModulosService } from 'src/app/modulos.service';

@Component({
  selector: 'app-editar-modulos',
  templateUrl: './editar-modulos.component.html',
  styleUrls: ['./editar-modulos.component.css'],
})
export class EditarModulosComponent implements OnInit {
  departamento: EditarDepartamento;
  constructor(
    public dialogRef: MatDialogRef<EditarModulosComponent>,
    private departamentoService: ModulosService,
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
    this.departamentoService
      .actualizarDepartamento(this.departamento)
      .subscribe({
        next: (response) => {
          // Cerrar la modal y posiblemente actualizar la tabla
          this.dialogRef.close(this.departamento);
          location.reload();
        },
        error: (error) => {
          // Manejar errores aquí
        },
      });
  }
}
