import { Component } from '@angular/core';
import { DetalleticketsService } from 'src/app/detalletickets.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-insertar-detalletickets',
  templateUrl: './insertar-detalletickets.component.html',
  styleUrls: ['./insertar-detalletickets.component.css']
})
export class InsertarDetalleticketsComponent {
  codigoDepartamento: string = '';
  idticketDepartamento: number = 0; 
  cantidadDepartamento: number = 0;
  precioventaDepartamento: number = 0;
  usuarioactualizaDepartamento: number = 1;
  

  constructor(
    public dialogRef: MatDialogRef<InsertarDetalleticketsComponent>,
    private departamentoService: DetalleticketsService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  insertar(): void {
    const nuevoDepartamento = {
      Codigo: this.codigoDepartamento,
      IdTicket: this.idticketDepartamento,
      Cantidad: this.cantidadDepartamento,
      PrecioVenta: this.precioventaDepartamento,
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
      }
    });
  }
}





