import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditarDetalletickets } from 'src/app/Models/detalletickets.models';
import { DetalleticketsService } from 'src/app/detalletickets.service';

@Component({
  selector: 'app-editar-detalletickets',
  templateUrl: './editar-detalletickets.component.html',
  styleUrls: ['./editar-detalletickets.component.css']
})
export class EditarDetalleticketsComponent implements OnInit {
  departamento: EditarDetalletickets;
  constructor(
    public dialogRef: MatDialogRef<EditarDetalleticketsComponent>,
    private departamentoService: DetalleticketsService,
    @Inject(MAT_DIALOG_DATA) public data: EditarDetalletickets
    
  ) {
    // Clona los datos recibidos para evitar la mutación directa
    this.departamento = {...data};
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardar(): void {
    this.departamentoService.actualizarDepartamento(this.departamento).subscribe({
      next: (response) => {
        // Cerrar la modal y posiblemente actualizar la tabla
        this.dialogRef.close(this.departamento);
      },
      error: (error) => {
        // Manejar errores aquí
      }
    });
  }
}








