import { Producto } from '../entities/producto.entity';





export interface IProductoRepository {
  findAll(): Promise<Producto[]>;
  findById(id: number): Promise<Producto | null>;
  create(producto: Producto): Promise<Producto>;
  update(id: number, producto: Partial<Producto>): Promise<Producto>;
  remove(id: number): Promise<void>;
}