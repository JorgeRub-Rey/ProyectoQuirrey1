import { Component } from '@angular/core';
import { MovimientosinventarioService } from 'src/app/movimientosinventario.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-insertar-movimientosinventario',
  templateUrl: './insertar-movimientosinventario.component.html',
  styleUrls: ['./insertar-movimientosinventario.component.css']
})
export class InsertarMovimientosinventarioComponent {
  idtipomovDepartamento: number = 0;
  idalmacenDepartamento: number = 0; 
  usuarioactualizaDepartamento: number = 1;
  

  constructor(
    public dialogRef: MatDialogRef<InsertarMovimientosinventarioComponent>,
    private departamentoService: MovimientosinventarioService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  insertar(): void {
    const nuevoDepartamento = {
      IdTipoMov: this.idtipomovDepartamento,
      IdAlmacen: this.idalmacenDepartamento,
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




