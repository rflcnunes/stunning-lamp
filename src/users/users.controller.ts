import { UpdatePutUserDTO } from './dto/update-put-user.dto';
import { CreateUserDTO } from './dto/create-user.dto';
import { Body, Controller, Get, Param, Post, Put, Res } from '@nestjs/common';

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

  @Put(':id')
  async update(@Body() body: UpdatePutUserDTO, @Param() params) {
    return {
      method: 'PUT',
      body: body,
      params: params,
    };
  }
}
