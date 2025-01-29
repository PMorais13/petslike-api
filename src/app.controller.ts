import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('spotify')
  async getExternalData(): Promise<string> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const teste = await this.appService.getExternalData(); // `await` diretamente na chamada assíncrona
    console.log(teste);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return teste; // Retorna o resultado da função assíncrona
  }
}
