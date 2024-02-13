import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditarPersonas } from 'src/app/Models/personas.models';
import { PersonasService } from 'src/app/personas.service';

@Component({
  selector: 'app-editar-personas',
  templateUrl: './editar-personas.component.html',
  styleUrls: ['./editar-personas.component.css'],
})
export class EditarPersonasComponent implements OnInit {
  departamento: EditarPersonas;
  constructor(
    public dialogRef: MatDialogRef<EditarPersonasComponent>,
    private departamentoService: PersonasService,
    @Inject(MAT_DIALOG_DATA) public data: EditarPersonas
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
        },
        error: (error) => {
          // Manejar errores aquí
        },
      });
  }
}
