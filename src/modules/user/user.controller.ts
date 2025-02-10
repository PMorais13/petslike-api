import { Body, Controller, Get, Post } from '@nestjs/common';
import { RegisterService } from './user.service';
import { UserInterface } from 'src/interfaces/user.interface';

@Controller()
export class RegisterController {
  constructor(private readonly appService: RegisterService) {}

  @Post('user')
  postUser(@Body() data: UserInterface): Promise<any> {
    return this.appService.createUser(data);
  }

  @Get('user')
  getUser(): Promise<any> {
    return this.appService.getUser();
  }
}
