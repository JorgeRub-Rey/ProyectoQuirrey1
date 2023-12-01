export interface detalletickets {
    Id: number;
    idTickets: number;
    Codigo: string;
    cantidad: number;
    precioventa: number;
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
      data: detalletickets [];
    };
  }

  export interface Editardetalletickets{
    Id: number;
    idTickets: number;
    Codigo: string;
    cantidad: number;
    precioventa: number;
    FechaActualiza: string;
    UsuarioActualiza: number;
    Estatus: number;
    Descripcion: string;
  }