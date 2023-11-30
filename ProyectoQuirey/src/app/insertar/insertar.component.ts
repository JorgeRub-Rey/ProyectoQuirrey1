import { Component } from '@angular/core';
import { AlmacenesService } from '../almacenes.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.css']
})
export class InsertarComponent {
  nombreDepartamento: string = '';
  direccionDepartamento: string = ''; 
  usuarioactualizaDepartamento: number = 1;
  

  constructor(
    public dialogRef: MatDialogRef<InsertarComponent>,
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
      },
      error: (error) => {
        console.error('Hubo un error al insertar el departamento', error);
      }
    });
  }
}

