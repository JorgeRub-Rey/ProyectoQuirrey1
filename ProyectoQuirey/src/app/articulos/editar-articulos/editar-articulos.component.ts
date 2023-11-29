import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditarArticulo } from 'src/app/Models/articulos.models';
import { ArticulosService } from 'src/app/articulos.service';

@Component({
  selector: 'app-editar-articulos',
  templateUrl: './editar-articulos.component.html',
  styleUrls: ['./editar-articulos.component.css']
})
export class EditarArticulosComponent implements OnInit {
  departamento: EditarArticulo;
  constructor(
    public dialogRef: MatDialogRef<EditarArticulosComponent>,
    private departamentoService: ArticulosService,
    @Inject(MAT_DIALOG_DATA) public data: EditarArticulo
    
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


