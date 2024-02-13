import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CategoriamodulosService } from 'src/app/categoriamodulos.service';
@Component({
  selector: 'app-insertar-categoriamodulos',
  templateUrl: './insertar-categoriamodulos.component.html',
  styleUrls: ['./insertar-categoriamodulos.component.css'],
})
export class InsertarCategoriamodulosComponent {
  Categoria: string = '';
  Usuario: number = 1;

  constructor(
    public dialogRef: MatDialogRef<InsertarCategoriamodulosComponent>,
    private ticketsService: CategoriamodulosService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  insertar(): void {
    const nuevoTickets = {
      Categoria: this.Categoria,
      Usuario: this.Usuario,
      // ...otros campos si los hay
    };

    this.ticketsService.insertarTickets(nuevoTickets).subscribe({
      next: (response) => {
        this.dialogRef.close(response);
      },
      error: (error) => {
        console.error('Hubo un error al insertar el tickets', error);
      },
    });
  }
}
