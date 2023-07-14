import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from "@nestjs/platform-express";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from './app.module';
import * as express from 'express';
import { join } from 'path'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: false});

  app.enableCors({credentials: true, origin: true})
  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')))

  // app.useStaticAssets(join(__dirname, '..', 'uploads'));

  const config = new DocumentBuilder()
      .setTitle('Clouds data')
      .setDescription('Clouds description')
      .setVersion('1.0')
      .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('swagger', app, document);

  await app.listen(5000);
}
bootstrap();
