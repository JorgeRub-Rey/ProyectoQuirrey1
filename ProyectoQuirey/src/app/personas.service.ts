import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse, Personas } from './Models/personas.models';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  private apiUrl = 'http://localhost:5020/api/Personas'; // Ajusta la URL base del API

  constructor(private http: HttpClient) {}

  getDepartamentos(): Observable<ApiResponse> {
    const requestBody = { "estatus": 1 }; // Si estatus es un número, no debería estar en comillas
    return this.http.post<ApiResponse>(`${this.apiUrl}/GetPersonas`, requestBody);
  }

// Método para insertar un nuevo departamento
insertarDepartamento(departamentoData: { Nombre: string; ApPaterno: string; ApMaterno: string; Direccion: string; UsuarioActualiza: number }): Observable<ApiResponse> {
  // El 'nombre' es la única parte variable que viene del formulario
  // 'activo' y 'usuario' son valores fijos en este ejemplo
  const body = {
    nombre: departamentoData.Nombre,
    appaterno: departamentoData.ApPaterno,
    apmaterno: departamentoData.ApMaterno,
    direccion: departamentoData.Direccion,
    usuarioactualiza: departamentoData.UsuarioActualiza || 0,// Valor por defecto si no se proporciona
  };
  return this.http.post<ApiResponse>(`${this.apiUrl}/InsertPersonas`, body);
  }

  eliminarDepartamento(Id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/DeletePersonas`, { Id });
  }
  
  
  actualizarDepartamento(departamentoData: Personas): Observable<ApiResponse> {
    const body ={
      id: departamentoData.Id,
      nombre: departamentoData.Nombre,
      appaterno: departamentoData.ApPaterno,
      apmaterno: departamentoData.ApMaterno,
      direccion: departamentoData.Direccion,
      estatus: departamentoData.Estatus || 0,
      usuarioactualiza: 1
    }
    console.log('Enviando solicitud con el siguiete cuerpo:', body);
    return this.http.post<ApiResponse>(`${this.apiUrl}/UpdatePersonas`, body);
  }
}




