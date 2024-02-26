import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse, MovimientosInventario } from './Models/movimientosinventario.models';

@Injectable({
  providedIn: 'root'
})
export class MovimientosinventarioService  {
  private apiUrl = 'http://localhost:5020/api/MovimientosInventario'; // Ajusta la URL base del API

  constructor(private http: HttpClient) {}

  getDepartamentos(IdTipoMov?: number): Observable<ApiResponse> {
    const requestBody = {
        estatus: 1,
        IdTipoMov: IdTipoMov // Agregar IdTipoMov al cuerpo de la solicitud
    };
    return this.http.post<ApiResponse>(`${this.apiUrl}/GetMovimientosInventario?IdTipoMov=0`, requestBody);
}


// Método para insertar un nuevo departamento
insertarDepartamento(departamentoData: { IdTipoMov: number; IdAlmacen: number; UsuarioActualiza: number }): Observable<ApiResponse> {
  // El 'nombre' es la única parte variable que viene del formulario
  // 'activo' y 'usuario' son valores fijos en este ejemplo
  const body = {
    idtipomov: departamentoData.IdTipoMov,
    idalmacen: departamentoData.IdAlmacen,
    usuarioactualiza: departamentoData.UsuarioActualiza
  };
  return this.http.post<ApiResponse>(`${this.apiUrl}/InsertMovimientoInventario`, body);
  }

  eliminarDepartamento(Id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/DeleteMovimientosInventario`, { Id });
  }

  actualizarDepartamento(departamentoData: MovimientosInventario): Observable<ApiResponse> {
    const body ={
      id: departamentoData.Id,
      idtipomov: departamentoData.IdTipoMov,
      idalmacen: departamentoData.IdAlmacen,
      usuarioactualiza: departamentoData.UsuarioActualiza,
     
    }
    console.log('Enviando solicitud con el siguiete cuerpo:', body);
    return this.http.post<ApiResponse>(`${this.apiUrl}/UpdateMovimientosInventario`, body);
  }
}






