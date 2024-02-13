import { Component } from '@angular/core';
import { ModulosusuarioService } from 'src/app/modulosusuario.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-insertar-modulosusuario',
  templateUrl: './insertar-modulosusuario.component.html',
  styleUrls: ['./insertar-modulosusuario.component.css'],
})
export class InsertarModulosusuarioComponent {
  idPerfil: number = 1;
  Usuario: number = 1;
  idmodulo: number = 1;

  constructor(
    public dialogRef: MatDialogRef<InsertarModulosusuarioComponent>,
    private departamentoService: ModulosusuarioService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  insertar(): void {
    const nuevoDepartamento = {
      IdPerfil: this.idPerfil,
      IdModulo: this.idmodulo,
      Usuario: this.Usuario,
      // ...otros campos si los hay
    };

    this.departamentoService.insertarusuarios(nuevoDepartamento).subscribe({
      next: (response) => {
        this.dialogRef.close(response);
      },
      error: (error) => {
        console.error('Hubo un error al insertar el departamento', error);
      },
    });
  }
}
