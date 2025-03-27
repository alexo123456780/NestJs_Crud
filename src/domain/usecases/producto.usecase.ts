import { Producto } from '../entities/producto.entity';

export interface IFindAllProductosUseCase {
  execute(): Promise<Producto[]>;
}

export interface IFindProductoByIdUseCase {
  execute(id: number): Promise<Producto>;
}

export interface ICreateProductoUseCase {
  execute(producto: Producto): Promise<Producto>;
}

export interface IUpdateProductoUseCase {
  execute(id: number, producto: Partial<Producto>): Promise<Producto>;
}

export interface IRemoveProductoUseCase {
  execute(id: number): Promise<void>;
}