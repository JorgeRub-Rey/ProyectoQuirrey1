import { Component } from '@angular/core';
import { ArticulosService } from 'src/app/articulos.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-insertar-articulos',
  templateUrl: './insertar-articulos.component.html',
  styleUrls: ['./insertar-articulos.component.css']
})
export class InsertarArticulosComponent {
  codigoDepartamento: string = '';
  descripcionDepartamento: string = '';
  unidadmedidaDepartamento: number = 1; 
  costoDepartamento: number = 0;
  precioDepartamento: number = 0;
  usuarioactualizaDepartamento: number = 1;

  constructor(
    public dialogRef: MatDialogRef<InsertarArticulosComponent>,
    private departamentoService: ArticulosService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  insertar(): void {
    const nuevoDepartamento = {
      Codigo: this.codigoDepartamento,
      Descripcion:this.descripcionDepartamento,
      UnidadMedida: this.unidadmedidaDepartamento,
      Costo: this.costoDepartamento,
      Precio: this.precioDepartamento,
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




