import { Injectable } from '@angular/core';
import { ApiResponse, detalletickets} from './Models/Detalletickets';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DetalleticketsService {

  private apiUrl = 'http://localhost:5020/api/DetalleTicket'; 

  constructor(private http: HttpClient) { }

  getdetalletickets(): Observable<ApiResponse> {
    const requestBody = { "estatus": 1 }; // Si estatus es un número, no debería estar en comillas
    return this.http.post<ApiResponse>(`${this.apiUrl}/GetDetalleTickets`, requestBody);
  }

// Método para insertar un nuevo departamento
insertardetalletickets(detalletickets: { idTicket: number;codigo:string;Cantidad:number; precioventa:number; UsuarioActualiza: number }): Observable<ApiResponse> {
  // El 'nombre' es la única parte variable que viene del formulario
  // 'activo' y 'usuario' son valores fijos en este ejemplo
  const body = {
    idTicket: detalletickets.idTicket, // Valor por defecto si no se proporciona
    codigo: detalletickets.codigo,
    cantidad: detalletickets.Cantidad,
    precioventa: detalletickets.precioventa,
    usuarioactualiza: detalletickets.UsuarioActualiza || 0,// Valor por defecto si no se proporciona
  };
  return this.http.post<ApiResponse>(`${this.apiUrl}/InsertDetalleTicket`, body);
  }

  eliminardetalletickets(Id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/DeleteDetalleTicket`, { Id });
  }
  
  
  actualizardetalletickets(detalletickets: detalletickets): Observable<ApiResponse> {
    const body ={
      idticket: detalletickets.idTickets,
      Codigo: detalletickets.Codigo,
      cantidad: detalletickets.cantidad,
      precioventa: detalletickets.precioventa,
      usuarioactualiza: 1,
      Estatus: detalletickets.Estatus || 0,
      
    }
    console.log('Enviando solicitud con el siguiete cuerpo:', body);
    return this.http.post<ApiResponse>(`${this.apiUrl}/UpdateDetalleTicket`, body);
  }
 
}
