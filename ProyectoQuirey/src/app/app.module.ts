import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AlmacenesComponent } from './almacenes/almacenes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ControlPanelComponent } from './control-panel/control-panel.component';
//import { EditarDepartamentoComponent } from './editar-departamento/editar-departamento.component';
//import { InsertarComponent } from './insertar/insertar.component';








import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';

import { ClientesComponent } from './clientes/clientes.component';
import { ControlPanelClientesComponent } from './clientes/control-panel-clientes/control-panel-clientes.component';
import { EditarClientesComponent } from './clientes/editar-clientes/editar-clientes.component';
import { InsertarClientesComponent } from './clientes/insertar-clientes/insertar-clientes.component';


import { ControlPanelAlmacenesComponent } from './almacenes/control-panel-almacenes/control-panel-almacenes.component';
import { EditarAlmacenesComponent } from './almacenes/editar-almacenes/editar-almacenes.component';
import { InsertarAlmacenesComponent } from './almacenes/insertar-almacenes/insertar-almacenes.component';

import { ArticulosComponent } from './articulos/articulos.component';
import { ControlPanelArticulosComponent } from './articulos/control-panel-articulos/control-panel-articulos.component';
import { EditarArticulosComponent } from './articulos/editar-articulos/editar-articulos.component';
import { InsertarArticulosComponent } from './articulos/insertar-articulos/insertar-articulos.component';
import { RutasComponent } from './rutas/rutas.component';
import { ControlPanelRutasComponent } from './rutas/control-panel-rutas/control-panel-rutas.component';
import { EditarRutasComponent } from './rutas/editar-rutas/editar-rutas.component';
import { InsertarRutasComponent } from './rutas/insertar-rutas/insertar-rutas.component';
import { DetalleticketsComponent } from './detalletickets/detalletickets.component';
import { ControlPanelDetalleticketsComponent } from './detalletickets/control-panel-detalletickets/control-panel-detalletickets.component';
import { EditarDetalleticketsComponent } from './detalletickets/editar-detalletickets/editar-detalletickets.component';
import { InsertarDetalleticketsComponent } from './detalletickets/insertar-detalletickets/insertar-detalletickets.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ControlPanelTicketsComponent } from './tickets/control-panel-tickets/control-panel-tickets.component';
import { EditarTicketsComponent } from './tickets/editar-tickets/editar-tickets.component';
import { InsertarTicketsComponent } from './tickets/insertar-tickets/insertar-tickets.component';

import { ExistenciasComponent } from './existencias/existencias.component';
import { ControlPanelExistenciasComponent } from './existencias/control-panel-existencias/control-panel-existencias.component';
import { EditarExistenciasComponent } from './existencias/editar-existencias/editar-existencias.component';
import { InsertarExistenciasComponent } from './existencias/insertar-existencias/insertar-existencias.component';






import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';












const appRoutes: Routes = [

  //{path:'controlPanel', component:ControlPanelAlmacenesComponent},
  { path:'almacenes', component: AlmacenesComponent },
  { path: 'articulos', component: ArticulosComponent },
  { path: 'clientes', component: ClientesComponent },

  { path: 'rutas', component: RutasComponent },
  { path: 'tickets', component: TicketsComponent },

  { path: 'existencias', component: ExistenciasComponent }

]



@NgModule({
  declarations: [
    AppComponent,
    AlmacenesComponent,
    AlmacenesComponent,
    ControlPanelAlmacenesComponent,
    EditarAlmacenesComponent,
    InsertarAlmacenesComponent,
    ArticulosComponent,
    ControlPanelArticulosComponent,
    EditarArticulosComponent,
    InsertarArticulosComponent,
    ClientesComponent,
    ControlPanelClientesComponent,
    EditarClientesComponent,
    InsertarClientesComponent,

    RutasComponent,
    ControlPanelRutasComponent,
    EditarRutasComponent,
    InsertarRutasComponent,
    DetalleticketsComponent,
    ControlPanelDetalleticketsComponent,
    EditarDetalleticketsComponent,
    InsertarDetalleticketsComponent,
    TicketsComponent,
    ControlPanelTicketsComponent,
    EditarTicketsComponent,
    InsertarTicketsComponent,
    ExistenciasComponent,
    ControlPanelExistenciasComponent,
    EditarExistenciasComponent,
    InsertarExistenciasComponent,
   



  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

