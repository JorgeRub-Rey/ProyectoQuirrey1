import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Editarempleados } from 'src/app/Models/empleados.models';
import { EmpleadosService } from 'src/app/empleados.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-empleados',
  templateUrl: './editar-empleados.component.html',
  styleUrls: ['./editar-empleados.component.css'],
})
export class EditarEmpleadosComponent implements OnInit {
  tickets: Editarempleados;

  constructor(
    public dialogRef: MatDialogRef<EditarEmpleadosComponent>,
    private ticketsService: EmpleadosService,
    @Inject(MAT_DIALOG_DATA) public data: Editarempleados
  ) {
    // Clona los datos recibidos para evitar la mutación directa
    this.tickets = { ...data };
  }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardar(): void {
    // Verificar si algún campo obligatorio está vacío
    if (
      !this.tickets.Matricula ||
      !this.tickets.Puesto ||
      !this.tickets.Perfil ||
      !this.tickets.idPersona ||
      // !this.tickets.Activo ||
      !this.tickets.Usuario
    ) {
      Swal.fire({
        title: 'Por favor, complete todos los campos obligatorios.',
        // text: 'Por favor, complete todos los campos obligatorios.',
        icon: 'error',
      });
      return; // Detener la ejecución del método si algún campo está vacío
    }

    // Si todos los campos están completos, proceder con la actualización
    this.ticketsService.actualizarTickets(this.tickets).subscribe({
      next: (response) => {
        // Cerrar la modal y posiblemente actualizar la tabla
        this.dialogRef.close(this.tickets);

        Swal.fire({
          title: 'Se han modificado correctamente los datos!',
          icon: 'success',
        }).then((result) => {
          if (result.isConfirmed) {
            location.reload();
          }
        });
      },
      error: (error) => {
        // Manejar errores aquí
      },
    });
  }
}
