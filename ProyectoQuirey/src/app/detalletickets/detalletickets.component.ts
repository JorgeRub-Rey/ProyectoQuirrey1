import { Component } from '@angular/core';
import { detalletickets } from '../Models/Detalletickets';
import { MatTableDataSource } from '@angular/material/table';
import { DetalleticketsService } from '../detalletickets.service';
import { MatDialog } from '@angular/material/dialog';
import { InsertarDetalleticketsComponent } from 'src/app/detalletickets/insertar-detalletickets/insertar-detalletickets.component';
import { EditarDetalleticketsComponent } from 'src/app/detalletickets/editar-detalletickets/editar-detalletickets.component';
@Component({
  selector: 'app-detalletickets',
  templateUrl: './detalletickets.component.html',
  styleUrls: ['./detalletickets.component.css']
})
export class DetalleticketsComponent {
  displayedColumns: string[] = ['Id', 'Codigo', 'idTicket', 'cantidad', 'precioventa','estatus', 'FechaActualiza','UsuarioActualiza','descripcionArticulo'];
  dataSource: MatTableDataSource<detalletickets>;

  constructor(private DetalleticketsService: DetalleticketsService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<detalletickets>(); // Inicializa dataSource como una instancia de MatTableDataSource
  }

  ngOnInit() {
    this.dataSource.filterPredicate = (data: detalletickets, filter: string) => {
      return data.Descripcion.toLowerCase().includes(filter) || 
             data.Id.toString().includes(filter); // Puedes añadir más campos si es necesario
    };
    this.DetalleticketsService.getdetalletickets().subscribe({
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
      }
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
    const dialogRef = this.dialog.open(InsertarDetalleticketsComponent, {
      width: '550px',
      // Puedes pasar datos al componente de la modal si es necesario
    });

    dialogRef.afterClosed().subscribe(result => {
      // Manejar los resultados cuando la modal se cierre
    });
  }
  


  eliminardetalletickets(Id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este cliente?')) {
      this.DetalleticketsService.eliminardetalletickets(Id).subscribe({
        next: () => {
          this.dataSource.data = this.dataSource.data.filter((detalletickets: detalletickets) => detalletickets.Id !== Id);
        },
        error: (error) => {
          console.error('Hubo un error al eliminar el cliente', error);
        }
      });
    }
  }
  
  
  abrirEditarModal(detalletickets: detalletickets) {
    const dialogRef = this.dialog.open(EditarDetalleticketsComponent, {
      width: '250px',
      data: detalletickets // Pasa el objeto de departamento a la modal
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        
      }
    });
  }
}
