import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditarArticulo } from 'src/app/Models/articulos.models';
import { ArticulosService } from 'src/app/articulos.service';
import { UnidadmedidaService } from 'src/app/unidadmedida.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-editar-articulos',
  templateUrl: './editar-articulos.component.html',
  styleUrls: ['./editar-articulos.component.css'],
})
export class EditarArticulosComponent implements OnInit {
  mySelect: (string | number)[] = [];
  selectedValueUnidadMedida: any;
  unidadmedida: any;

  departamento: EditarArticulo;
  idunidadmedidalistDepartamento: number = 0;


  constructor(
    public dialogRef: MatDialogRef<EditarArticulosComponent>,
    private departamentoService: ArticulosService,
    private unidadmedidaservice: UnidadmedidaService,
    @Inject(MAT_DIALOG_DATA) public data: EditarArticulo
  ) {
    // Clona los datos recibidos para evitar la mutación directa
    this.departamento = { ...data };
  }
  getUnidadMedida() {
    this.unidadmedidaservice.getDepartamentos().subscribe((res) => {
      this.unidadmedida = res.response.data; // Cambia aquí
      console.log(res);
    });
  }

  selectChangeUnidadMedida() {
    if (this.mySelect.length > 0) {
      // Por ejemplo, seleccionando el primer elemento de mySelect
      const selectedItemId = this.mySelect[0]; // o cualquier otra lógica para obtener un solo valor
      console.log('Unidad seleccionada:', this.idunidadmedidalistDepartamento);
    }
  }

  ngOnInit(): void {
    this.getUnidadMedida();
  }
  }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardar(): void {

    this.departamento.UnidadMedida = this.idunidadmedidalistDepartamento;


    // Verifica si los campos obligatorios están completos
    if (
      !this.departamento.Codigo ||
      !this.departamento.Descripcion ||
      !this.departamento.UnidadMedida ||
      !this.departamento.Costo ||
      !this.departamento.Precio ||
      !this.departamento.UsuarioActualiza
    ) {
      // Muestra un mensaje de error utilizando SweetAlert2
      Swal.fire({
        icon: 'error',
        title: 'Por favor, complete todos los campos obligatorios.',
      });
      return;
    }

    // Si todos los campos obligatorios están completos, procede con la actualización    this.departamentoService
      .actualizarDepartamento(this.departamento)
      .subscribe({
        next: (response) => {
          // Cerrar la modal y posiblemente actualizar la tabla
          this.dialogRef.close(this.departamento);

          location.reload();
          // location.reload();
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
