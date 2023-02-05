import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';
import { UpdatePutUserDTO } from './dto/update-put-user.dto';
import { CreateUserDTO } from './dto/create-user.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Res,
} from '@nestjs/common';

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

  @Patch(':id')
  async updatePartial(@Body() body: UpdatePatchUserDTO, @Param() params) {
    return {
      method: 'PATCH',
      body: body,
      params: params,
    };
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id) {
    return {
      id: id,
    };
  }
}
