import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Editarcategoriamodulos } from 'src/app/Models/categoriamodulos.models';
import { CategoriamodulosService } from 'src/app/categoriamodulos.service';

@Component({
  selector: 'app-editar-categoriamodulos',
  templateUrl: './editar-categoriamodulos.component.html',
  styleUrls: ['./editar-categoriamodulos.component.css'],
})
export class EditarCategoriamodulosComponent implements OnInit {
  tickets: Editarcategoriamodulos;
  constructor(
    public dialogRef: MatDialogRef<EditarCategoriamodulosComponent>,
    private ticketsService: CategoriamodulosService,
    @Inject(MAT_DIALOG_DATA) public data: Editarcategoriamodulos
  ) {
    // Clona los datos recibidos para evitar la mutación directa
    this.tickets = { ...data };
  }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardar(): void {
    this.ticketsService.actualizarTickets(this.tickets).subscribe({
      next: (response) => {
        // Cerrar la modal y posiblemente actualizar la tabla
        this.dialogRef.close(this.tickets);
      },
      error: (error) => {
        // Manejar errores aquí
      },
    });
  }
}
