import { AuthService } from './config/auth/auth.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { RegisterModule } from './modules/user/user.module';

@Module({
  imports: [HttpModule, RegisterModule],
  controllers: [AppController],
  providers: [AuthService, AppService],
})
export class AppModule {}
