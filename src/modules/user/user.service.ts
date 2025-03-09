import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
// import { IPSERVER } from 'src/common/constants/aws';

@Injectable()
export class RegisterService {
  url = '';

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.url = this.configService.get<string>('DATABASE_URL') + '/users';
  }

  async createUser(dto): Promise<any> {
    try {
      const response = await firstValueFrom(
        this.httpService.post(this.url, dto),
      );
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao enviar dados: ${error.message}`);
    }
  }

  async getUser(): Promise<any> {
    console.log(this.url);

    const response = await firstValueFrom(this.httpService.get(this.url));

    if (!Array.isArray(response.data)) {
      console.error('Erro: O retorno não é um array!');
      return [];
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const result = response.data.map(({ passWord, ...item }) => item);

    console.log('Objeto após remoção:', result);
    return result;
  }
}
