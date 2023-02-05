import { Controller, Get, Res } from '@nestjs/common';

@Controller('users')
export class UsersController {
  // constructor(private readonly )

  @Get()
  heathCheckUsers(@Res() res) {
    const data = { message: 'Users is UP' };
    return res.json(data);
  }
}
