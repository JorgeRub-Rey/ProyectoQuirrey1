import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditarDepartamento } from 'src/app/Models/almacenes.models';
import { AlmacenesService } from 'src/app/almacenes.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-editar-almacenes',
  templateUrl: './editar-almacenes.component.html',
  styleUrls: ['./editar-almacenes.component.css']
})
export class EditarAlmacenesComponent implements OnInit {
  departamento: EditarDepartamento;
  constructor(
    public dialogRef: MatDialogRef<EditarAlmacenesComponent>,
    private departamentoService: AlmacenesService,
    @Inject(MAT_DIALOG_DATA) public data: EditarDepartamento
    
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
        //location.reload();
        Swal.fire({
          title: 'Se han modificado los datos!',
          icon: 'success',
        }).then((result) => {
          if (result.isConfirmed) {
            location.reload();
          }
        });
      },
      error: (error) => {
        // Manejar errores aquí
      }
    });
  }
}






