import { CreateUserDTO } from './dto/create-user.dto';
import { Body, Controller, Get, Post, Res } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Post()
  async cerate(@Body() body: CreateUserDTO) {
    return { body: body };
  }

  @Get()
  heathCheckUsers(@Res() res) {
    const data = { message: 'Users is UP' };
    return res.json(data);
  }
}
