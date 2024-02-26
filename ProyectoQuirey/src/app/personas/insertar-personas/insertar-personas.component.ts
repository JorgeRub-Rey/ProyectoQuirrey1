import { Component } from '@angular/core';
import { PersonasService } from 'src/app/personas.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-insertar-personas',
  templateUrl: './insertar-personas.component.html',
  styleUrls: ['./insertar-personas.component.css'],
})
export class InsertarPersonasComponent {
  nombreDepartamento: string = '';
  appaternoDepartamento: string = '';
  apmaternoDepartamento: string = '';
  CurpDepartamento: string = '';
  direccionDepartamento: string = '';
  usuarioDepartamento: number = 1;

  constructor(
    public dialogRef: MatDialogRef<InsertarPersonasComponent>,
    private departamentoService: PersonasService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  insertar(): void {
    const nuevoDepartamento = {
      Nombre: this.nombreDepartamento,
      ApPaterno: this.appaternoDepartamento,
      ApMaterno: this.apmaternoDepartamento,
      Curp: this.CurpDepartamento,
      Direccion: this.direccionDepartamento,
      Usuario: this.usuarioDepartamento,

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
