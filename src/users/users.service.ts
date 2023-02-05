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
}
