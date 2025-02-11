import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS para permitir requisições de qualquer origem
  app.enableCors({
    origin: true, // Permitir todas as origens (apenas para desenvolvimento)
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
  });

  await app.listen(3000); // Inicia o servidor na porta 3000
}

bootstrap();
