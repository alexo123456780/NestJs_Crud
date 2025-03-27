import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Producto } from '../../domain/entities/producto.entity';
import { 
  FindAllProductosUseCase,
  FindProductoByIdUseCase,
  CreateProductoUseCase,
  UpdateProductoUseCase,
  RemoveProductoUseCase 
} from '../../application/usecases/producto.usecase';

@Controller('productos')
export class ProductoController {
  constructor(
    private readonly findAllProductosUseCase: FindAllProductosUseCase,
    private readonly findProductoByIdUseCase: FindProductoByIdUseCase,
    private readonly createProductoUseCase: CreateProductoUseCase,
    private readonly updateProductoUseCase: UpdateProductoUseCase,
    private readonly removeProductoUseCase: RemoveProductoUseCase,
  ) {}

  @Post()
  async crear(@Body() producto: Producto) {
    return this.createProductoUseCase.execute(producto);
  }

  @Get()
  async obtenerTodos() {
    return this.findAllProductosUseCase.execute();
  }

  @Get(':id')
  async obtenerUno(@Param('id') id: string) {
    return this.findProductoByIdUseCase.execute(+id);
  }

  @Patch(':id')
  async actualizar(@Param('id') id: string, @Body() producto: Partial<Producto>) {
    return this.updateProductoUseCase.execute(+id, producto);
  }

  @Delete(':id')
  async eliminar(@Param('id') id: string) {
    return this.removeProductoUseCase.execute(+id);
  }
}