import { Injectable, Inject } from '@nestjs/common';
import { Producto } from '../../domain/entities/producto.entity';
import { IProductoRepository } from '../../domain/repositories/producto.repository';
import {
  IFindAllProductosUseCase,
  IFindProductoByIdUseCase,
  ICreateProductoUseCase,
  IUpdateProductoUseCase,
  IRemoveProductoUseCase
} from '../../domain/usecases/producto.usecase';

@Injectable()
export class FindAllProductosUseCase implements IFindAllProductosUseCase {
  constructor(
    @Inject('IProductoRepository')
    private readonly productoRepository: IProductoRepository
  ) {}

  async execute(): Promise<Producto[]> {
    return this.productoRepository.findAll();
  }
}

@Injectable()
export class FindProductoByIdUseCase implements IFindProductoByIdUseCase {
  constructor(
    @Inject('IProductoRepository')
    private readonly productoRepository: IProductoRepository
  ) {}

  async execute(id: number): Promise<Producto> {
    const producto = await this.productoRepository.findById(id);
    if (!producto) {
      throw new Error(`Producto con ID ${id} no encontrado`);
    }
    return producto;
  }
}

@Injectable()
export class CreateProductoUseCase implements ICreateProductoUseCase {
  constructor(
    @Inject('IProductoRepository')
    private readonly productoRepository: IProductoRepository
  ) {}

  async execute(producto: Producto): Promise<Producto> {
    return this.productoRepository.create(producto);
  }
}

@Injectable()
export class UpdateProductoUseCase implements IUpdateProductoUseCase {
  constructor(
    @Inject('IProductoRepository')
    private readonly productoRepository: IProductoRepository
  ) {}

  async execute(id: number, producto: Partial<Producto>): Promise<Producto> {
    return this.productoRepository.update(id, producto);
  }
}

@Injectable()
export class RemoveProductoUseCase implements IRemoveProductoUseCase {
  constructor(
    @Inject('IProductoRepository')
    private readonly productoRepository: IProductoRepository
  ) {}

  async execute(id: number): Promise<void> {
    return this.productoRepository.remove(id);
  }
}