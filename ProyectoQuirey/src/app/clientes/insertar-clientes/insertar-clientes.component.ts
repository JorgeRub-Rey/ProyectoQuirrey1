import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ClientesService } from 'src/app/clientes.service';

@Component({
  selector: 'app-insertar-clientes',
  templateUrl: './insertar-clientes.component.html',
  styleUrls: ['./insertar-clientes.component.css']
})
export class InsertarClientesComponent {

  Nombre: string = '';
  Direccion: string = ''; 
  UsuarioActualiza: number = 1;

  constructor(
    public dialogRef: MatDialogRef<InsertarClientesComponent>,
    private clientesService: ClientesService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  insertar(): void {
    const nuevoCliente = {
      Nombre: this.Nombre,
      Direccion: this.Direccion,
      UsuarioActualiza: this.UsuarioActualiza,
      // ...otros campos si los hay
    };
    
    this.clientesService.insertarClientes(nuevoCliente).subscribe({
      next: (response) => {
        this.dialogRef.close(response);
        location.reload();
      },
      error: (error) => {
        console.error('Hubo un error al insertar el cliente', error);
      }
    });
  }

}
