import { Component } from '@angular/core';
import { ModulosusuarioService } from 'src/app/modulosusuario.service';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

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
    // Verificar si algún campo obligatorio está vacío
    if (!this.idPerfil || !this.idmodulo || !this.Usuario) {
      // Mostrar un mensaje de error utilizando SweetAlert2
      Swal.fire({
        icon: 'error',
        title: 'Por favor, complete todos los campos obligatorios.',
      });
      return;
    }

    const nuevoDepartamento = {
      IdPerfil: this.idPerfil,
      IdModulo: this.idmodulo,
      Usuario: this.Usuario,
      // ...otros campos si los hay
    };

    this.departamentoService.insertarusuarios(nuevoDepartamento).subscribe({
      next: (response) => {
        this.dialogRef.close(response);
        Swal.fire({
          title: 'Se han insertado correctamente los datos!',
          icon: 'success',
        }).then((result) => {
          if (result.isConfirmed) {
            location.reload();
          }
        });

      },
      error: (error) => {
        console.error('Hubo un error al insertar el departamento', error);
      },
    });
  }
}
