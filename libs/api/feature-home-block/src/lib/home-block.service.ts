import { Injectable } from '@nestjs/common'
import { PrismaService } from '@e-commerce-app/api/data-access-db'
import {
  CreateOneHomeBlockArgs,
  DeleteOneHomeBlockArgs,
  FindUniqueHomeBlockArgs,
  UpdateOneHomeBlockArgs
} from '@e-commerce-app/api/generated-db-types'

@Injectable()
export class HomeBlockService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createOneHomeBlockArgs: CreateOneHomeBlockArgs) {
    return this.prismaService.homeBlock.create({
      data: createOneHomeBlockArgs.data,
      include: { rgbBackground: true }
    })
  }

  findAll() {
    return this.prismaService.homeBlock.findMany({ include: { rgbBackground: true } })
  }

  findOne(findUniqueHomeBlockArgs: FindUniqueHomeBlockArgs) {
    const { where } = findUniqueHomeBlockArgs
    return this.prismaService.homeBlock.findUnique({ where, include: { rgbBackground: true } })
  }

  update(updateOneHomeBlockArgs: UpdateOneHomeBlockArgs) {
    return this.prismaService.homeBlock.update({
      data: updateOneHomeBlockArgs.data,
      where: updateOneHomeBlockArgs.where,
      include: { rgbBackground: true }
    })
  }

  remove(deleteOneHomeBlockArgs: DeleteOneHomeBlockArgs) {
    return this.prismaService.homeBlock.delete({
      where: deleteOneHomeBlockArgs.where,
      include: { rgbBackground: true }
    })
  }
}
