import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { IPSERVER } from 'src/common/constants/aws';

@Injectable()
export class RegisterService {
  protected url = IPSERVER + 'users';
  constructor(private readonly httpService: HttpService) {}

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
    const response = await firstValueFrom(this.httpService.get(this.url));

    if (!Array.isArray(response.data)) {
      console.error('Erro: O retorno não é um array!');
      return [];
    }

    const result = response.data.map(({ passWord, ...item }) => item);

    console.log('Objeto após remoção:', result);
    return result;
  }
}
