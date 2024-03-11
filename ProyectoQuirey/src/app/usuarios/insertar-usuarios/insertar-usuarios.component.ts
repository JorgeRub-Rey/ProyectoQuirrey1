import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/usuarios.service';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2'; // Import SweetAlert2

@Component({
  selector: 'app-insertar-usuarios',
  templateUrl: './insertar-usuarios.component.html',
  styleUrls: ['./insertar-usuarios.component.css'],
})
export class InsertarUsuariosComponent {
  nombreusuarioDepartamento: string = '';
  passwordDepartamento: string = '';
  usuarioDepartamento: string = '';
  idpersonaDepartamento: number = 1;

  constructor(
    public dialogRef: MatDialogRef<InsertarUsuariosComponent>,
    private departamentoService: UsuariosService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  insertar(): void {
    // Check if required fields are filled
    if (
      !this.nombreusuarioDepartamento ||
      !this.passwordDepartamento ||
      !this.idpersonaDepartamento
    ) {
      // Display SweetAlert2 message for missing fields
      Swal.fire({
        icon: 'error',
        title: 'Por favor, completa todos los campos obligatorios.',
        // text: 'Por favor, completa todos los campos obligatorios.',
      });
      return; // Stop execution if fields are missing
    }

    const nuevoDepartamento = {
      NombreUsuario: this.nombreusuarioDepartamento,
      Password: this.passwordDepartamento,
      Usuario: this.usuarioDepartamento,
      IdPersona: this.idpersonaDepartamento,
      // ...otros campos si los hay
    };

    this.departamentoService.insertarDepartamento(nuevoDepartamento).subscribe({
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
