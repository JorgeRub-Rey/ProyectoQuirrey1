import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlmacenesComponent } from './almacenes/almacenes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { EditarDepartamentoComponent } from './editar-departamento/editar-departamento.component';
import { InsertarComponent } from './insertar/insertar.component';
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


const appRoutes: Routes = [
  { path: 'controlPanel', component: ControlPanelComponent },
  { path: 'almacenes', component: AlmacenesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AlmacenesComponent,
    ControlPanelComponent,
    EditarDepartamentoComponent,
    InsertarComponent
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

