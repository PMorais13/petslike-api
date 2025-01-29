import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello merda!';
  }

  public async getExternalData(): Promise<any> {
    const client_id = '8e0cffdc81c34cab86a50361d7f44103';
    const client_secret = '235dca511a4f43eab3cd1f3e0bad4fb7';

    const authHeader =
      'Basic ' +
      Buffer.from(client_id + ':' + client_secret).toString('base64');

    try {
      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST', // A API exige POST para autenticação
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: authHeader,
        },
        body: new URLSearchParams({
          grant_type: 'client_credentials',
        }).toString(), // Enviar o grant_type corretamente
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data = await response.json();
      console.log(data);
      return data; // Retorna os dados da API
    } catch (error) {
      console.error('Erro na chamada POST:', error);
      throw error;
    }
  }
}
