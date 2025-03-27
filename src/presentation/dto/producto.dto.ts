export class CrearProductoDto {
  nombre: string;
  descripcion: string;
  precio: number;
  activo: boolean;
}





export class ActualizarProductoDto {
  nombre?: string;
  descripcion?: string;
  precio?: number;
  activo?: boolean;
}