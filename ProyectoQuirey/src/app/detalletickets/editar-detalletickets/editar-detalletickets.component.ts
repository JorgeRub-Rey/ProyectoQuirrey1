import { Component ,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Editardetalletickets } from 'src/app/Models/Detalletickets';
import { DetalleticketsService } from 'src/app/detalletickets.service';
@Component({
  selector: 'app-editar-detalletickets',
  templateUrl: './editar-detalletickets.component.html',
  styleUrls: ['./editar-detalletickets.component.css']
})
export class EditarDetalleticketsComponent implements OnInit  {

  detalleTickets: Editardetalletickets;
  constructor(
    public dialogRef: MatDialogRef<EditarDetalleticketsComponent>,
    private DetalleticketsService: DetalleticketsService,
    @Inject(MAT_DIALOG_DATA) public data: Editardetalletickets
    
  ) {
    // Clona los datos recibidos para evitar la mutación directa
    this.detalleTickets = {...data};
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardar(): void {
   this.DetalleticketsService.actualizardetalletickets(this.detalleTickets).subscribe({
      next: (response) => {
        // Cerrar la modal y posiblemente actualizar la tabla
        this.dialogRef.close(this.detalleTickets);
      },
      error: (error) => {
        // Manejar errores aquí
      }
    });
  }
}
