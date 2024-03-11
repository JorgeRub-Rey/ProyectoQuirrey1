import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditarClientes } from 'src/app/Models/clientes.models';
import { ClientesService } from 'src/app/clientes.service';

@Component({
  selector: 'app-editar-clientes',
  templateUrl: './editar-clientes.component.html',
  styleUrls: ['./editar-clientes.component.css'],
})
export class EditarClientesComponent implements OnInit {
  clientes: EditarClientes;
  constructor(
    public dialogRef: MatDialogRef<EditarClientesComponent>,
    private clientesService: ClientesService,
    @Inject(MAT_DIALOG_DATA) public data: EditarClientes
  ) {
    // Clona los datos recibidos para evitar la mutación directa
    this.clientes = { ...data };
  }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardar(): void {
    this.clientesService.actualizarClientes(this.clientes).subscribe({
      next: (response) => {
        // Cerrar la modal y posiblemente actualizar la tabla
        this.dialogRef.close(this.clientes);
        location.reload();
      },
      error: (error) => {
        // Manejar errores aquí
      },
    });
  }
}
