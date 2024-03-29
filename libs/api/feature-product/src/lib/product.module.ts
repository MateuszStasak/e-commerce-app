import { Module } from '@nestjs/common'
import { ProductService } from './product.service'
import { ProductResolver } from './product.resolver'
import { PrismaService } from '@e-commerce-app/api/data-access-db'

@Module({
  providers: [ProductResolver, ProductService, PrismaService]
})
export class ProductModule {}