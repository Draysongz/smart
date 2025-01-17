import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, 
    {cors: {
    origin: 'https://smartgreen.vercel.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  }}
  );
  await app.listen(3000);
}
bootstrap();
