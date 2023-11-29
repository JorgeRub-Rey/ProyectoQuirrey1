import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< Updated upstream
import { AlmacenesComponent } from './almacenes/almacenes.component';
<<<<<<< Updated upstream
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { EditarDepartamentoComponent } from './editar-departamento/editar-departamento.component';
import { InsertarComponent } from './insertar/insertar.component';



=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
>>>>>>> Stashed changes
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';

import { MatDialogModule } from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


//import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';

import { AlmacenesComponent } from './almacenes/almacenes.component';
import { ControlPanelAlmacenesComponent } from './almacenes/control-panel-almacenes/control-panel-almacenes.component';
import { EditarAlmacenesComponent } from './almacenes/editar-almacenes/editar-almacenes.component';
import { InsertarAlmacenesComponent } from './almacenes/insertar-almacenes/insertar-almacenes.component';

import { ArticulosComponent } from './articulos/articulos.component';
import { ControlPanelArticulosComponent } from './articulos/control-panel-articulos/control-panel-articulos.component';
import { EditarArticulosComponent } from './articulos/editar-articulos/editar-articulos.component';
import { InsertarArticulosComponent } from './articulos/insertar-articulos/insertar-articulos.component';


const appRoutes: Routes = [
<<<<<<< Updated upstream
  {path:'controlPanel', component:ControlPanelComponent},
  { path:'almacenes', component: AlmacenesComponent }
]
=======
>>>>>>> Stashed changes
=======
  { path: 'controlPanel', component: ControlPanelAlmacenesComponent },
  { path: 'almacenes', component: AlmacenesComponent },
  { path: 'articulos', component: ArticulosComponent }
];
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< Updated upstream
    AlmacenesComponent,
<<<<<<< Updated upstream
    ControlPanelComponent,
    EditarDepartamentoComponent,
    InsertarComponent
=======
    AlmacenesComponent
>>>>>>> Stashed changes
=======
    ControlPanelAlmacenesComponent,
    EditarAlmacenesComponent,
    InsertarAlmacenesComponent,
    ArticulosComponent,
    ControlPanelArticulosComponent,
    EditarArticulosComponent,
    InsertarArticulosComponent
>>>>>>> Stashed changes
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
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
