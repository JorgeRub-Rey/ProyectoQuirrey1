import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Usuario } from '../Models/usuarios.models';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { InsertarUsuariosComponent } from './insertar-usuarios/insertar-usuarios.component';
import { EditarUsuariosComponent } from './editar-usuarios/editar-usuarios.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent {
  displayedColumns: string[] = [
    'Id',
    'NombreUsuario',
    'Password',
    'FechaHora',
    'Activo',
    'IdPersona',
    'Acciones',
  ];
  dataSource: MatTableDataSource<Usuario>;

  constructor(
    private usuariosService: UsuariosService,
    public dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource<Usuario>(); // Inicializa dataSource como una instancia de MatTableDataSource
  }

  ngOnInit() {
    this.dataSource.filterPredicate = (data: Usuario, filter: string) => {
      return (
        data.NombreUsuario.toLowerCase().includes(filter) ||
        data.Id.toString().includes(filter)
      ); // Puedes añadir más campos si es necesario
    };
    this.usuariosService.getDepartamentos().subscribe({
      next: (response) => {
        console.log('Respuesta del servidor:', response.response.data);
        if (response.success) {
          this.dataSource.data = response.response.data; // Asigna los datos al atributo 'data' de dataSource
        } else {
          // Manejar la respuesta en caso de fallo
        }
      },
      error: (error) => {
        // Manejar el error de la solicitud
      },
    });
  }
  // Método para realizar el filtrado
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  abrirInsertarModal() {
    const dialogRef = this.dialog.open(InsertarUsuariosComponent, {
      width: '550px',
      // Puedes pasar datos al componente de la modal si es necesario
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Manejar los resultados cuando la modal se cierre
    });
  }

  eliminarDepartamento(Id: number) {
    //location.reload();
    Swal.fire({
      title: 'Se han eliminado los datos!',
      icon: 'success',
    }).then((result) => {
      if (result.isConfirmed) {
        location.reload();
      }
    });
    if (confirm('¿Estás seguro de que deseas eliminar este departamento?')) {
      this.usuariosService.eliminarDepartamento(Id).subscribe({
        next: () => {
          this.dataSource.data = this.dataSource.data.filter(
            (departamento: Usuario) => departamento.Id !== Id
          );
        },
        error: (error) => {
          console.error('Hubo un error al eliminar el departamento', error);
        },
      });
    }
  }

  abrirEditarModal(departamento: Usuario) {
    const dialogRef = this.dialog.open(EditarUsuariosComponent, {
      width: '250px',
      data: departamento, // Pasa el objeto de departamento a la modal
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }
}
