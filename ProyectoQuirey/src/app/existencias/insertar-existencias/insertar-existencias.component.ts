import { Component } from '@angular/core';
import { ExistenciasService } from 'src/app/existencias.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-insertar-existencias',
  templateUrl: './insertar-existencias.component.html',
  styleUrls: ['./insertar-existencias.component.css']
})
export class InsertarExistenciasComponent {
  codigoDepartamento: string = '';
  idalmacenDepartamento: number = 0;  // Initialize with a default number value
  cantidadDepartamento: number = 0;  // Initialize with a default number value

  constructor(
    public dialogRef: MatDialogRef<InsertarExistenciasComponent>,
    private departamentoService: ExistenciasService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  insertar(): void {
    const nuevoDepartamento = {
      Codigo: this.codigoDepartamento,
      IdAlmacen: this.idalmacenDepartamento,
      Cantidad: this.cantidadDepartamento,
      // ...otros campos si los hay
    };
    
    this.departamentoService.insertarDepartamento(nuevoDepartamento).subscribe({
      next: (response) => {
        this.dialogRef.close(response);
      },
      error: (error) => {
        console.error('Hubo un error al insertar el departamento', error);
      }
    });
  }
}






