import { Injectable } from '@nestjs/common'
import * as bcrypt from 'bcrypt'
import { PrismaService } from '@e-commerce-app/api/data-access-db'
import {
  CreateOneUserArgs,
  FindUniqueUserArgs,
  UpdateOneUserArgs,
  DeleteOneUserArgs
} from '@e-commerce-app/api/generated-db-types'

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createOneUserArgs: CreateOneUserArgs) {
    const { data } = createOneUserArgs
    const saltOrRounds = 10
    const hashedPassword = await bcrypt.hash(data.password, saltOrRounds)
    return this.prismaService.user.create({
      data: {
        ...data,
        password: hashedPassword
      }
    })
  }

  findAll() {
    return this.prismaService.user.findMany()
  }

  findOne(findUniqueUserArgs: FindUniqueUserArgs) {
    return this.prismaService.user.findUnique(findUniqueUserArgs)
  }

  update(updateOneUserArgs: UpdateOneUserArgs) {
    return this.prismaService.user.update(updateOneUserArgs)
  }

  remove(deleteOneUserArgs: DeleteOneUserArgs) {
    return this.prismaService.user.delete(deleteOneUserArgs)
  }
}
