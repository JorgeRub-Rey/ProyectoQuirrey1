import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/usuarios.service';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { PersonasService } from 'src/app/personas.service';

@Component({
  selector: 'app-insertar-usuarios',
  templateUrl: './insertar-usuarios.component.html',
  styleUrls: ['./insertar-usuarios.component.css'],
})
export class InsertarUsuariosComponent {
  mySelect: (string | number)[] = [];
  selectedValuePersonas: any;
  personas: any;

  nombreusuarioDepartamento: string = '';
  passwordDepartamento: string = '';
  usuarioDepartamento: string = '';
  idpersonaDepartamento: number = 1;
  idpersonalistDepartamento: number = 0;

  constructor(
    public dialogRef: MatDialogRef<InsertarUsuariosComponent>,
    private departamentoService: UsuariosService,
    private personasservice: PersonasService
  ) {}
  getPersonas() {
    this.personasservice.getDepartamentos().subscribe((res) => {
      this.personas = res.response.data; // Cambia aquí
      console.log(res);
    });
  }
  selectChangePersonas() {
    if (this.mySelect.length > 0) {
      // Por ejemplo, seleccionando el primer elemento de mySelect
      const selectedItemId = this.mySelect[0]; // o cualquier otra lógica para obtener un solo valor
      this.selectedValuePersonas = this.personasservice.getDropDownText(
        selectedItemId,
        this.personas
      );
    }
  }
  ngOnInit(): void {
    this.getPersonas();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  insertar(): void {
    // Check if required fields are filled
    if (
      !this.nombreusuarioDepartamento ||
      !this.passwordDepartamento ||
      !this.idpersonalistDepartamento
    ) {
      // Display SweetAlert2 message for missing fields
      Swal.fire({
        icon: 'error',
        title: 'Por favor, completa todos los campos obligatorios.',
        // text: 'Por favor, completa todos los campos obligatorios.',
      });
      return; // Stop execution if fields are missing
    }

    const nuevoDepartamento = {
      NombreUsuario: this.nombreusuarioDepartamento,
      Password: this.passwordDepartamento,
      Usuario: this.usuarioDepartamento,
      IdPersona: this.idpersonalistDepartamento,
      // ...otros campos si los hay
    };

    this.departamentoService.insertarDepartamento(nuevoDepartamento).subscribe({
      next: (response) => {
        this.dialogRef.close(response);
        Swal.fire({
          title: 'Se han insertado correctamente los datos!',
          icon: 'success',
        }).then((result) => {
          if (result.isConfirmed) {
            location.reload();
          }
        });
      },
      error: (error) => {
        console.error('Hubo un error al insertar el departamento', error);
      },
    });
  }
}
