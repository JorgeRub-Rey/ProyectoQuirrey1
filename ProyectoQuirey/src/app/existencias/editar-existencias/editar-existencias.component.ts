import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditarExistencias } from 'src/app/Models/existencias.models';
import { ExistenciasService } from 'src/app/existencias.service';
import { AlmacenesService } from 'src/app/almacenes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-existencias',
  templateUrl: './editar-existencias.component.html',
  styleUrls: ['./editar-existencias.component.css'],
})
export class EditarExistenciasComponent implements OnInit {
  mySelect: (string | number)[] = [];
  selectedValueAlmacenes: any;
  almacenes: any;

  departamento: EditarExistencias;
  idalmaceneslistDepartamento = 0;

  constructor(
    public dialogRef: MatDialogRef<EditarExistenciasComponent>,
    private departamentoService: ExistenciasService,
    private almacenesservice: AlmacenesService,
    @Inject(MAT_DIALOG_DATA) public data: EditarExistencias
  ) {
    // Clona los datos recibidos para evitar la mutación directa
    this.departamento = { ...data };
  }
  getAlmacenes() {
    this.almacenesservice.getDepartamentos().subscribe((res) => {
      this.almacenes = res.response.data; // Cambia aquí
      console.log(res);
    });
  }

  selectChangealmacenes() {
    if (this.mySelect.length > 0) {
      // Por ejemplo, seleccionando el primer elemento de mySelect
      const selectedItemId = this.mySelect[0]; // o cualquier otra lógica para obtener un solo valor
      console.log('Almacen seleccionado:', this.idalmaceneslistDepartamento);
    }
  }
  ngOnInit(): void {
    this.getAlmacenes();
  }
  }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardar(): void {
    this.departamento.IdAlmacen = this.idalmaceneslistDepartamento;

    // Verificar si algún campo obligatorio está vacío
    if (
      !this.departamento.Codigo ||
      !this.departamento.IdAlmacen ||
      !this.departamento.Cantidad ||
      !this.departamento.Estatus
    ) {
      // Mostrar un mensaje de error utilizando SweetAlert2
      Swal.fire({
        icon: 'error',
        title: 'Por favor, complete todos los campos obligatorios.',
      });
      return;
    }

    // Realizar la actualización del departamento
    this.departamentoService
      .actualizarDepartamento(this.departamento)
      .subscribe({
        next: (response) => {
          // Cerrar la modal y posiblemente actualizar la tabla
          this.dialogRef.close(this.departamento);
          location.reload();

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
