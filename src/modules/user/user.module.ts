import { Module } from '@nestjs/common';
import { RegisterService } from './user.service';
import { HttpModule } from '@nestjs/axios';
import { RegisterController } from './user.controller';

@Module({
  imports: [HttpModule],
  controllers: [RegisterController],
  providers: [RegisterService],
})
export class RegisterModule {}
