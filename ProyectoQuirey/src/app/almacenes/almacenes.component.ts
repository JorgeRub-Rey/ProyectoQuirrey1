/* import { Component } from '@angular/core';
import { AlmacenesService } from '../almacenes.service';
import { Almacenes } from '../Models/almacenes.models';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { InsertarAlmacenesComponent } from './insertar-almacenes/insertar-almacenes.component';
import { EditarAlmacenesComponent } from './editar-almacenes/editar-almacenes.component';

@Component({
  selector: 'app-almacenes',
  templateUrl: './almacenes.component.html',
  styleUrls: ['./almacenes.component.css'],
})
export class AlmacenesComponent {
  displayedColumns: string[] = [
    'Id',
    'Nombre',
    'Direccion',
    'Estatus',
    'UsuarioActualiza',
    'FechaActualiza',
    'Acciones',
  ];
  dataSource: MatTableDataSource<Almacenes>;
  mostrarContenido = false; 

  constructor(
    private almacenesService: AlmacenesService,
    public dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource<Almacenes>(); // Inicializa dataSource como una instancia de MatTableDataSource
  }

  ngOnInit() {
    this.dataSource.filterPredicate = (data: Almacenes, filter: string) => {
      return (
        data.Nombre.toLowerCase().includes(filter) ||
        data.Id.toString().includes(filter)
      ); // Puedes añadir más campos si es necesario
    };
    this.almacenesService.getDepartamentos().subscribe({
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
    const dialogRef = this.dialog.open(InsertarAlmacenesComponent, {
      width: '550px',
      // Puedes pasar datos al componente de la modal si es necesario
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Manejar los resultados cuando la modal se cierre
    });
  }

  eliminarDepartamento(Id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este departamento?')) {
      this.almacenesService.eliminarDepartamento(Id).subscribe({
        next: () => {
          this.dataSource.data = this.dataSource.data.filter(
            (departamento: Almacenes) => departamento.Id !== Id
          );
        },
        error: (error) => {
          console.error('Hubo un error al eliminar el departamento', error);
        },
      });
    }
  }

  abrirEditarModal(departamento: Almacenes) {
    const dialogRef = this.dialog.open(EditarAlmacenesComponent, {
      width: '550px',
      data: departamento, // Pasa el objeto de departamento a la modal
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }

  mostrarConFade() {
    this.mostrarContenido = true;
  }
}
 */


import { Component, OnInit } from '@angular/core';
import { AlmacenesService } from '../almacenes.service';
import { Almacenes } from '../Models/almacenes.models';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { InsertarAlmacenesComponent } from './insertar-almacenes/insertar-almacenes.component';
import { EditarAlmacenesComponent } from './editar-almacenes/editar-almacenes.component';

@Component({
  selector: 'app-almacenes',
  templateUrl: './almacenes.component.html',
  styleUrls: ['./almacenes.component.css'],
})
export class AlmacenesComponent implements OnInit {
  displayedColumns: string[] = [
    'Id',
    'Nombre',
    'Direccion',
    'Estatus',
    'UsuarioActualiza',
    'FechaActualiza',
    'Acciones',
  ];
  dataSource: MatTableDataSource<Almacenes>;
  mostrarContenido = false;

  constructor(
    private almacenesService: AlmacenesService,
    public dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource<Almacenes>();
  }

  ngOnInit() {
    this.dataSource.filterPredicate = (data: Almacenes, filter: string) => {
      return (
        data.Nombre.toLowerCase().includes(filter) ||
        data.Id.toString().includes(filter)
      );
    };

    this.almacenesService.getDepartamentos().subscribe({
      next: (response) => {
        console.log('Respuesta del servidor:', response.response.data);
        if (response.success) {
          this.dataSource.data = response.response.data;
          this.mostrarConFade(); // Llamar al método para mostrar con desvanecimiento
        } else {
          // Manejar la respuesta en caso de fallo
        }
      },
      error: (error) => {
        // Manejar el error de la solicitud
      },
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  abrirInsertarModal() {
    const dialogRef = this.dialog.open(InsertarAlmacenesComponent, {
      width: '550px',
      // Puedes pasar datos al componente de la modal si es necesario
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Manejar los resultados cuando la modal se cierre
    });
  }
  
  abrirEditarModal(departamento: Almacenes) {
    const dialogRef = this.dialog.open(EditarAlmacenesComponent, {
      width: '550px',
      data: departamento, // Pasa el objeto de departamento a la modal
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }
  
  eliminarDepartamento(Id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este departamento?')) {
      this.almacenesService.eliminarDepartamento(Id).subscribe({
        next: () => {
          this.dataSource.data = this.dataSource.data.filter(
            (departamento: Almacenes) => departamento.Id !== Id
          );
        },
        error: (error) => {
          console.error('Hubo un error al eliminar el departamento', error);
        },
      });
    }
  }


  mostrarConFade() {
    this.mostrarContenido = true;
  }
}
