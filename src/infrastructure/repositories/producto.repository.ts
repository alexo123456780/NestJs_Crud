import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from '../../domain/entities/producto.entity';
import { IProductoRepository } from '../../domain/repositories/producto.repository';

@Injectable()
export class ProductoRepository implements IProductoRepository {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
  ) {}

  async findAll(): Promise<Producto[]> {
    return this.productoRepository.find();
  }

  async findById(id: number): Promise<Producto | null> {
    return this.productoRepository.findOne({ where: { id } });
  }

  async create(producto: Producto): Promise<Producto> {
    const newProducto = this.productoRepository.create(producto);
    return this.productoRepository.save(newProducto);
  }

  async update(id: number, producto: Partial<Producto>): Promise<Producto> {
    await this.productoRepository.update(id, producto);
    const updatedProducto = await this.findById(id);
    if (!updatedProducto) {
      throw new Error(`Producto con ID ${id} no encontrado`);
    }
    return updatedProducto;
  }

  async remove(id: number): Promise<void> {
    await this.productoRepository.delete(id);
  }
}