/**
 * Módulo de Productos
 * Integra todos los componentes de la arquitectura limpia para productos
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './domain/entities/producto.entity';
import { ProductoController } from './presentation/controllers/producto.controller';
import { ProductoRepository } from './infrastructure/repositories/producto.repository';
import {
  FindAllProductosUseCase,
  FindProductoByIdUseCase,
  CreateProductoUseCase,
  UpdateProductoUseCase,
  RemoveProductoUseCase
} from './application/usecases/producto.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([Producto])],
  controllers: [ProductoController],
  providers: [
    ProductoRepository,
    FindAllProductosUseCase,
    FindProductoByIdUseCase,
    CreateProductoUseCase,
    UpdateProductoUseCase,
    RemoveProductoUseCase,
    {
      provide: 'IProductoRepository',
      useClass: ProductoRepository,
    },
  ],
  exports: [ProductoRepository],
})
export class ProductosModule {}