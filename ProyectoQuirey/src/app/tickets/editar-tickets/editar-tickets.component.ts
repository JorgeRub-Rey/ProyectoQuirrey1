import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditarTickets } from 'src/app/Models/tickets.models';
import { TicketsService } from 'src/app/tickets.service';
import { SucursalsedeService } from 'src/app/sucursalsede.service';
import { ClientesService } from 'src/app/clientes.service';
@Component({
  selector: 'app-editar-tickets',
  templateUrl: './editar-tickets.component.html',
  styleUrls: ['./editar-tickets.component.css'],
})
export class EditarTicketsComponent implements OnInit {
  mySelect: (string | number)[] = [];
  selectedValueSucursales: any;
  selectedValueClientes: any;
  sucursales: any;
  clientes: any;

  tickets: EditarTickets;
  idsucursalsedelistDepartamento = 0;
  idclienteslistDepartamento = 0;

  constructor(
    public dialogRef: MatDialogRef<EditarTicketsComponent>,
    private ticketsService: TicketsService,
    private sucursalesservice: SucursalsedeService,
    private clientesservice: ClientesService,
    @Inject(MAT_DIALOG_DATA) public data: EditarTickets
  ) {
    // Clona los datos recibidos para evitar la mutación directa
    this.tickets = { ...data };
  }
  getSucursales() {
    this.sucursalesservice.getTickets().subscribe((res) => {
      this.sucursales = res.response.data; // Cambia aquí
      console.log(res);
    });
  }
  getClientes() {
    this.clientesservice.getClientes().subscribe((res) => {
      this.clientes = res.response.data; // Cambia aquí
      console.log(res);
    });
  }

  selectChangeSucursales() {
    if (this.mySelect.length > 0) {
      // Por ejemplo, seleccionando el primer elemento de mySelect
      const selectedItemId = this.mySelect[0]; // o cualquier otra lógica para obtener un solo valor
      console.log(
        'Sucursal seleccionada:',
        this.idsucursalsedelistDepartamento
      );
    }
  }

  selectChangeClientes() {
    if (this.mySelect.length > 0) {
      // Por ejemplo, seleccionando el primer elemento de mySelect
      const selectedItemId = this.mySelect[0]; // o cualquier otra lógica para obtener un solo valor
      console.log('Cliente seleccionado:', this.idclienteslistDepartamento);
    }
  }
  ngOnInit(): void {
    this.getSucursales();
    this.getClientes();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardar(): void {
    this.tickets.IdSucursal = this.idsucursalsedelistDepartamento;
    this.tickets.IdCliente = this.idclienteslistDepartamento;

    this.ticketsService.actualizarTickets(this.tickets).subscribe({
      next: (response) => {
        // Cerrar la modal y posiblemente actualizar la tabla
        this.dialogRef.close(this.tickets);
        location.reload();
      },
      error: (error) => {
        // Manejar errores aquí
      },
    });
  }
}
