import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/usuarios.service';
import { MatDialogRef } from '@angular/material/dialog';

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
        location.reload();
      },
      error: (error) => {
        console.error('Hubo un error al insertar el departamento', error);
      },
    });
  }
}
