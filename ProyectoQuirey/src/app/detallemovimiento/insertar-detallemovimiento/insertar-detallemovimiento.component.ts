import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DetallemovimientoService } from 'src/app/detallemovimiento.service';
@Component({
  selector: 'app-insertar-detallemovimiento',
  templateUrl: './insertar-detallemovimiento.component.html',
  styleUrls: ['./insertar-detallemovimiento.component.css']
})
export class InsertarDetallemovimientoComponent {
  codigoDepartamento: string = '';
  idMovimientoDepartamento: number = 0; 
  cantidadDepartamento: number = 0;
  costoDepartamento: number = 0;
  usuarioactualizaDepartamento: number = 1;
  

  constructor(
    public dialogRef: MatDialogRef<InsertarDetallemovimientoComponent>,
    private departamentoService: DetallemovimientoService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  insertar(): void {
    const nuevoDepartamento = {
      Codigo: this.codigoDepartamento,
      Idmovimiento: this.idMovimientoDepartamento,
      Cantidad: this.cantidadDepartamento,
      costo: this.costoDepartamento,
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
