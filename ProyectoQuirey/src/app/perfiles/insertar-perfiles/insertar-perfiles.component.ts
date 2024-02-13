import { Component } from '@angular/core';
import { PerfilesService } from 'src/app/perfiles.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-insertar-perfiles',
  templateUrl: './insertar-perfiles.component.html',
  styleUrls: ['./insertar-perfiles.component.css'],
})
export class InsertarPerfilesComponent {
  nombreDepartamento: string = '';
  usuarioDepartamento: number = 1;

  constructor(
    public dialogRef: MatDialogRef<InsertarPerfilesComponent>,
    private departamentoService: PerfilesService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  insertar(): void {
    const nuevoDepartamento = {
      Nombre: this.nombreDepartamento,
      Usuario: this.usuarioDepartamento,
      // ...otros campos si los hay
    };

    this.departamentoService.insertarDepartamento(nuevoDepartamento).subscribe({
      next: (response) => {
        this.dialogRef.close(response);
      },
      error: (error) => {
        console.error('Hubo un error al insertar el departamento', error);
      },
    });
  }
}
