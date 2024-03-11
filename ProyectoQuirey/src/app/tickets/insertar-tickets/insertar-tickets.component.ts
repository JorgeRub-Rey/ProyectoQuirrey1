import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatDialogRef } from '@angular/material/dialog';
import { TicketsService } from 'src/app/tickets.service';
import { SucursalsedeService } from 'src/app/sucursalsede.service';
import { ClientesService } from 'src/app/clientes.service';


@Component({
  selector: 'app-insertar-tickets',
  templateUrl: './insertar-tickets.component.html',
  styleUrls: ['./insertar-tickets.component.css'],
  animations: [
    trigger('dropDownAnimation', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(-20px)'
      })),
      transition('void => *', [
        animate('300ms ease-out')
      ]),
      transition('* => void', [
        animate('300ms ease-in')
      ])
    ])
  ]
})


export class InsertarTicketsComponent implements OnInit{
  mySelect: (string | number)[] = [];
  selectedValue: any;
  selectedValue1: any;
  users: any;
  users1: any;

  idsucursalDepartamento: number = 0;
  idsucursalsedeDepartamento: number = 0;
  idclienteDepartamento: number = 0;
  idclientesDepartamento: number = 0;
  idvendedorDepartamento: number = 0;
  usuarioactualizaDepartamento: number = 1;

  constructor(
    public dialogRef: MatDialogRef<InsertarTicketsComponent>,
    private ticketsService: TicketsService,
    private sucursalsedeservice: SucursalsedeService,
    private clientesservice: ClientesService
  ) {}
  
  get() {
    this.sucursalsedeservice.getTickets().subscribe((res) => {
      this.users = res.response.data; // Cambia aquí
      console.log(res);
    });
  }
  get1() {
    this.clientesservice.getClientes().subscribe((res) => {
      this.users1 = res.response.data; // Cambia aquí
      console.log(res);
    });
  }

  selectChange() {
    if (this.mySelect.length > 0) {
      // Por ejemplo, seleccionando el primer elemento de mySelect
      const selectedItemId = this.mySelect[0]; // o cualquier otra lógica para obtener un solo valor
      this.selectedValue = this.sucursalsedeservice.getDropDownText(
        selectedItemId,
        this.users
      );
    }
  }

  selectChange1() {
    if (this.mySelect.length > 0) {
      // Por ejemplo, seleccionando el primer elemento de mySelect
      const selectedItemId = this.mySelect[0]; // o cualquier otra lógica para obtener un solo valor
      this.selectedValue1 = this.clientesservice.getDropDownText(
        selectedItemId,
        this.users1
      );
    }
  }
  ngOnInit(): void {
    this.get();
    this.get1();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  insertar(): void {
    const nuevoTickets = {
      IdSucursal: this.idsucursalsedeDepartamento,
      IdSucursalSede: this.idsucursalsedeDepartamento,
      IdClientes: this.idclientesDepartamento,
      IdCliente: this.idclientesDepartamento,
      IdVendedor: this.idvendedorDepartamento,
      UsuarioActualiza: this.usuarioactualizaDepartamento,
      // ...otros campos si los hay
    };

    this.ticketsService.insertarTickets(nuevoTickets).subscribe({
      next: (response) => {
        this.dialogRef.close(response);
        location.reload();
      },
      error: (error) => {
        console.error('Hubo un error al insertar el tickets', error);
      },
    });
  }
}
