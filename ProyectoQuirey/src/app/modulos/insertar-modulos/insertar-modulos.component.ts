import { Component } from '@angular/core';
import { ModulosService } from 'src/app/modulos.service';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

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
    // Check if mandatory fields are filled
    if (!this.moduloDepartamento || !this.usuarioDepartamento || !this.idcategoriaDepartamento) {
      Swal.fire({
        title: 'Campos obligatorios',
        text: 'Por favor, complete todos los campos obligatorios.',
        icon: 'warning',
        confirmButtonText: 'Ok',
      });
      return; // Stop the execution if fields are not filled
    }

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
        Swal.fire({
          title: 'Error',
          text: 'Hubo un error al insertar el departamento. Por favor, inténtelo de nuevo.',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      },
    });
  }
}
