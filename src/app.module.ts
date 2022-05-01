import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controller/products.controller';
import { CategoriesController } from './controller/categories.controller';
import { ProductsService } from './services/products.service';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, CategoriesController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
