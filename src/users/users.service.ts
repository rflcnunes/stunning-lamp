import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';
import { UpdatePutUserDTO } from './dto/update-put-user.dto';
import { CreateUserDTO } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(body: CreateUserDTO) {
    return this.prisma.user.create({
      data: body,
      select: {
        id: true,
      },
    });
  }

  async list() {
    return this.prisma.user.findMany();
  }

  async show(id: number) {
    return this.prisma.user.findUnique({
      where: { id: id },
    });
  }

  async update(id: number, data: UpdatePutUserDTO) {
    console.log({ data });
    return this.prisma.user.update({
      data,
      where: {
        id,
      },
    });
  }

  async updatePartial(id: number, data: UpdatePatchUserDTO) {
    console.log({ data, id });
    return this.prisma.user.update({
      data,
      where: {
        id,
      },
    });
  }
}
