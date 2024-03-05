import { Component } from '@angular/core';
import { ExistenciasService } from 'src/app/existencias.service';
import { MatDialogRef } from '@angular/material/dialog';
import { AlmacenesService } from 'src/app/almacenes.service';

@Component({
  selector: 'app-insertar-existencias',
  templateUrl: './insertar-existencias.component.html',
  styleUrls: ['./insertar-existencias.component.css'],
})
export class InsertarExistenciasComponent {
  mySelect: (string | number)[] = [];
  selectedValue: any;
  users: any;

  codigoDepartamento: string = '';
  idalmacenDepartamento: number = 0; // Initialize with a default number value
  cantidadDepartamento: number = 0; // Initialize with a default number value
  //variable para comboUM: Any;
  constructor(
    public dialogRef: MatDialogRef<InsertarExistenciasComponent>,
    private departamentoService: ExistenciasService,
    private _service: AlmacenesService
  ) {}
  get() {
    this._service.getDepartamentos().subscribe((res) => {
      this.users = res.response.data; // Cambia aquí
      console.log(res);
    });
  }

  selectChange() {
    if (this.mySelect.length > 0) {
      // Por ejemplo, seleccionando el primer elemento de mySelect
      const selectedItemId = this.mySelect[0]; // o cualquier otra lógica para obtener un solo valor
      this.selectedValue = this._service.getDropDownText(
        selectedItemId,
        this.users
      );
    }
  }
  ngOnInit(): void {
    this.get();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  insertar(): void {
    const nuevoDepartamento = {
      Codigo: this.codigoDepartamento,
      IdAlmacen: this.idalmacenDepartamento,
      Cantidad: this.cantidadDepartamento,
      // ...otros campos si los hay
    };

    this.departamentoService.insertarDepartamento(nuevoDepartamento).subscribe({
      next: (response) => {
        this.dialogRef.close(response);
        location.reload();
      },
      error: (error) => {
        console.error('Hubo un error al insertar el departamento', error);
      },
    });
  }
}
