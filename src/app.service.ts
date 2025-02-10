import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { IPSERVER } from './common/constants/aws';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async getDataFromAPI(): Promise<any> {
    const url = IPSERVER + 'users';
    const response = await firstValueFrom(this.httpService.get(url));

    return response.data;
  }
}
