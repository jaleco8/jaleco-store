import { Injectable } from '@nestjs/common';
import { Product } from './../entities/product.entity';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      price: 100,
      stock: 10,
      image: 'https://via.placeholder.com/150',
    },
  ];

  getAll() {
    return this.products;
  }

  getOne(id: number) {
    return this.products.find((product) => product.id === id);
  }

  create(payload: any) {
    const newProduct = {
      id: this.counterId + 1,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }
}
