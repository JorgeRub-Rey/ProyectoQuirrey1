import { Component } from '@angular/core';
import { AlmacenesService } from 'src/app/almacenes.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-insertar-almacenes',
  templateUrl: './insertar-almacenes.component.html',
  styleUrls: ['./insertar-almacenes.component.css'],
})
export class InsertarAlmacenesComponent {
  nombreDepartamento: string = '';
  direccionDepartamento: string = '';
  usuarioactualizaDepartamento: number = 1;

  constructor(
    public dialogRef: MatDialogRef<InsertarAlmacenesComponent>,
    private departamentoService: AlmacenesService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  insertar(): void {
    const nuevoDepartamento = {
      Nombre: this.nombreDepartamento,
      Direccion: this.direccionDepartamento,
      UsuarioActualiza: this.usuarioactualizaDepartamento,
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
