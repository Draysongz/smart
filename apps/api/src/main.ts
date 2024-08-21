import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*', // Allows all origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specify the allowed methods
    allowedHeaders: 'Content-Type, Accept', // Specify the allowed headers
  });

  app.useGlobalPipes(new ValidationPipe());
  
  await app.listen(3000);
}
bootstrap();
