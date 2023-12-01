export interface detallemovimiento {
    Id: number;
    IdMovimiento: number;
    Codigo: string;
    cantidad: number;
    Costo: number;
    FechaActualiza: string;
    UsuarioActualiza: number;
    Estatus: number;
    Descripcion: string;
  }
  
  export interface ApiResponse {
    StatusCode: number;
    success: boolean;
    fecha: string;
    message: string;
    response: {
      data: detallemovimiento [];
    };
  }

  export interface Editardetallemovimiento{
    Id: number;
    IdMovimiento: number;
    Codigo: string;
    cantidad: number;
    Costo: number;
    UsuarioActualiza: number;
    Estatus: number;
  }