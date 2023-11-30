import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RutasService } from 'src/app/rutas.service';

@Component({
  selector: 'app-insertar-rutas',
  templateUrl: './insertar-rutas.component.html',
  styleUrls: ['./insertar-rutas.component.css']
})
export class InsertarRutasComponent {

  Nombre: string = '';
  UsuarioActualiza: number = 1;

  constructor(
    public dialogRef: MatDialogRef<InsertarRutasComponent>,
    private rutasService: RutasService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  insertar(): void {
    const nuevaRuta = {
      Nombre: this.Nombre,
      UsuarioActualiza: this.UsuarioActualiza,
      // ...otros campos si los hay
    };
    
    this.rutasService.insertarRutas(nuevaRuta).subscribe({
      next: (response) => {
        this.dialogRef.close(response);
      },
      error: (error) => {
        console.error('Hubo un error al insertar el cliente', error);
      }
    });
  }

}
