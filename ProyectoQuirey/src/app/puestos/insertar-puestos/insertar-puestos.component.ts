import { Component } from '@angular/core';
import { PuestosService } from 'src/app/puestos.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-insertar-puestos',
  templateUrl: './insertar-puestos.component.html',
  styleUrls: ['./insertar-puestos.component.css'],
})
export class InsertarPuestosComponent {
  nombreDepartamento: string = '';
  usuarioDepartamento: number = 1;

  constructor(
    public dialogRef: MatDialogRef<InsertarPuestosComponent>,
    private departamentoService: PuestosService
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
