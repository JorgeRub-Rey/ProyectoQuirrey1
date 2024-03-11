import { Component ,Inject, OnInit} from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditarDetallemovimiento } from 'src/app/Models/detallemovimiento.models';
import { DetallemovimientoService } from 'src/app/detallemovimiento.service';

@Component({
  selector: 'app-editar-detallemovimiento',
  templateUrl: './editar-detallemovimiento.component.html',
  styleUrls: ['./editar-detallemovimiento.component.css']
})
export class EditarDetallemovimientoComponent implements OnInit {
  departamento: EditarDetallemovimiento;
  constructor(
    public dialogRef: MatDialogRef<EditarDetallemovimientoComponent>,
    private departamentoService: DetallemovimientoService,
    @Inject(MAT_DIALOG_DATA) public data: EditarDetallemovimiento
    
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
        location.reload();
      },
      error: (error) => {
        // Manejar errores aquí
      }
    });
  }
}