import { Component } from '@angular/core';
import { ModulosService } from 'src/app/modulos.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-insertar-modulos',
  templateUrl: './insertar-modulos.component.html',
  styleUrls: ['./insertar-modulos.component.css'],
})
export class InsertarModulosComponent {
  moduloDepartamento: string = '';
  usuarioDepartamento: number = 1;
  idcategoriaDepartamento: number = 1;

  constructor(
    public dialogRef: MatDialogRef<InsertarModulosComponent>,
    private departamentoService: ModulosService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  insertar(): void {
    const nuevoDepartamento = {
      Modulo: this.moduloDepartamento,
      Usuario: this.usuarioDepartamento,
      IdCategoria: this.idcategoriaDepartamento,
      // ...otros campos si los hay
    };

    this.departamentoService.insertarDepartamento(nuevoDepartamento).subscribe({
      next: (response) => {
        this.dialogRef.close(response);
        location.reload();
      },
      error: (error) => {
        console.error('Hubo un error al insertar el departamento', error);
      },
    });
  }
}
