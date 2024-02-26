import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditarModulousuarios } from 'src/app/Models/modulosusuarios.models';
import { ModulosusuarioService } from 'src/app/modulosusuario.service';
@Component({
  selector: 'app-editar-modulosusuario',
  templateUrl: './editar-modulosusuario.component.html',
  styleUrls: ['./editar-modulosusuario.component.css'],
})
export class EditarModulosusuarioComponent implements OnInit {
  departamento: EditarModulousuarios;
  constructor(
    public dialogRef: MatDialogRef<EditarModulosusuarioComponent>,
    private departamentoService: ModulosusuarioService,
    @Inject(MAT_DIALOG_DATA) public data: EditarModulousuarios
  ) {
    // Clona los datos recibidos para evitar la mutación directa
    this.departamento = { ...data };
  }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardar(): void {
    this.departamentoService.actualizarusuarios(this.departamento).subscribe({
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
