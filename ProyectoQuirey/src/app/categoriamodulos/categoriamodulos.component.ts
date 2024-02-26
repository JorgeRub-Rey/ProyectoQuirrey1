import { Component } from '@angular/core';
import { categoriamodulos } from '../Models/categoriamodulos.models';
import { MatTableDataSource } from '@angular/material/table';
import { CategoriamodulosService } from '../categoriamodulos.service';
import { MatDialog } from '@angular/material/dialog';
import { InsertarCategoriamodulosComponent } from 'src/app/categoriamodulos/insertar-categoriamodulos/insertar-categoriamodulos.component';
import { EditarCategoriamodulosComponent } from 'src/app/categoriamodulos/editar-categoriamodulos/editar-categoriamodulos.component';

@Component({
  selector: 'app-categoriamodulos',
  templateUrl: './categoriamodulos.component.html',
  styleUrls: ['./categoriamodulos.component.css'],
})
export class CategoriamodulosComponent {
  displayedColumns: string[] = [
    'Id',
    'Categoria',
    'FechaHora',
    'Activo',
    'Usuario',
    'Acciones',
  ];
  dataSource: MatTableDataSource<categoriamodulos>;

  constructor(
    private ticketsService: CategoriamodulosService,
    public dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource<categoriamodulos>(); // Inicializa dataSource como una instancia de MatTableDataSource
  }

  ngOnInit() {
    this.dataSource.filterPredicate = (
      data: categoriamodulos,
      filter: string
    ) => {
      return (
        data.categoria.toString().includes(filter) ||
        data.Id.toString().includes(filter)
      ); // Puedes añadir más campos si es necesario
    };
    this.ticketsService.getTickets().subscribe({
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
    const dialogRef = this.dialog.open(InsertarCategoriamodulosComponent, {
      width: '550px',
      // Puedes pasar datos al componente de la modal si es necesario
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Manejar los resultados cuando la modal se cierre
    });
  }

  eliminarTickets(Id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este cliente?')) {
      this.ticketsService.eliminarTickets(Id).subscribe({
        next: () => {
          this.dataSource.data = this.dataSource.data.filter(
            (clientes: categoriamodulos) => clientes.Id !== Id
          );
        },
        error: (error) => {
          console.error('Hubo un error al eliminar el cliente', error);
        },
      });
    }
  }

  abrirEditarModal(clientes: categoriamodulos) {
    const dialogRef = this.dialog.open(EditarCategoriamodulosComponent, {
      width: '550px',
      data: clientes, // Pasa el objeto de departamento a la modal
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }
}
