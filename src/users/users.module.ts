import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [],
})
export class UsersModule {}
