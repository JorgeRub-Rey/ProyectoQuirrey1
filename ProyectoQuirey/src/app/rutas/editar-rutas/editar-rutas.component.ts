import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditarRutas } from 'src/app/Models/rutas.models';
import { RutasService} from 'src/app/rutas.service';

@Component({
  selector: 'app-editar-rutas',
  templateUrl: './editar-rutas.component.html',
  styleUrls: ['./editar-rutas.component.css']
})
export class EditarRutasComponent implements OnInit {

  rutas: EditarRutas;
  constructor(
    public dialogRef: MatDialogRef<EditarRutasComponent>,
    private rutasService: RutasService,
    @Inject(MAT_DIALOG_DATA) public data: EditarRutas
    
  ) {
    // Clona los datos recibidos para evitar la mutación directa
    this.rutas = {...data};
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardar(): void {
    this.rutasService.actualizarRutas(this.rutas).subscribe({
      next: (response) => {
        // Cerrar la modal y posiblemente actualizar la tabla
        this.dialogRef.close(this.rutas);
      },
      error: (error) => {
        // Manejar errores aquí
      }
    });
  }

}
