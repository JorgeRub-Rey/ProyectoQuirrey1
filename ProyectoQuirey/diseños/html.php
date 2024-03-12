<mat-sidenav-container class="sidenav-container fondo-negro">
  <mat-sidenav #sidenav mode="side" class="sidenav">
    <!-- Contenido del menú -->
    <div class="contenedor">
      <mat-nav-list class="barra">
        <img src="assets/logo quirey limpio.png" alt="Icono" width="150" height="150">
        <a class="letrasBarra" routerLink="/almacenes">Almacenes</a>
<a class="letrasBarra" routerLink="/articulos">Articulos</a>
<a class="letrasBarra" routerLink="/categoriamodulos">Categoria de Modulos</a>
<a class="letrasBarra" routerLink="/clientes">Clientes</a>
<a class="letrasBarra" routerLink="/detalletickets">Detalle de Tickets</a>
<a class="letrasBarra" routerLink="/detallemovimiento">Detalles de Movimiento</a>
<a class="letrasBarra" routerLink="/detalleperfil">Detalle de Perfil</a>
<a class="letrasBarra" routerLink="/empleados">Empleados</a>
<a class="letrasBarra" routerLink="/existencias">Existencias</a>
<a class="letrasBarra" routerLink="/modulos">Modulos</a>
<a class="letrasBarra" routerLink="/modulosusuario">Modulos Usuario</a>
<a class="letrasBarra" routerLink="/movimientosinventario">Movimientosde Inventario</a>
<a class="letrasBarra" routerLink="/perfiles">Perfiles</a>
<a class="letrasBarra" routerLink="/personas">Personas</a>
<a class="letrasBarra" routerLink="/puestos">Puestos</a>
<a class="letrasBarra" routerLink="/rutas">Rutas</a>
<a class="letrasBarra" routerLink="/sucursalsede">Sucursal Sede</a>
<a class="letrasBarra" routerLink="/tickets">Tickets</a>
<a class="letrasBarra" routerLink="/usuarios">Usuarios</a>

      </mat-nav-list>
    </div>
  </mat-sidenav>

  <mat-sidenav-content class="content animated-background">
    <mat-toolbar class= "titulo1" style="background-color: #df9412; color: rgb(255, 255, 255)">
      <button class="Menuicono"  mat-icon-button (click)="sidenav.toggle()">
        <mat-icon>menu</mat-icon>
      </button>
      <span class="Encabezado">titulo</span>
    </mat-toolbar>

    <!-- Contenido de la página principal -->

    <!-- Resto de tu código -->

    <div>
      <mat-form-field class="mat-form-field ">
        <mat-label>Filtrar</mat-label>
        <input
          matInput
          (keyup)="applyFilter($event)"
          placeholder="Buscar..."
          #input
        />
      </mat-form-field>
    </div>
    <div class="toolbar">
      <button mat-button (click)="abrirInsertarModal()" class="orange-button">
        Añadir 
      </button>
    </div>

    <div class="TabladeDatos">





    <ng-container matColumnDef="Acciones">
          <th mat-header-cell *matHeaderCellDef>Acciones</th>
          <td mat-cell *matCellDef="let elemento">
            <mat-icon class="editar"
              (click)="abrirEditarModal(elemento)"
              >edit</mat-icon
            >
            <mat-icon class="borrar"
              (click)="eliminarDepartamento(elemento.Id)"
              >delete</mat-icon
            >
          </td>
        </ng-container>

        <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
        <mat-row class="mat-row" *matRowDef="let row; columns: displayedColumns"></mat-row>
      </table>
    </div>
  </mat-sidenav-content>
</mat-sidenav-container>
