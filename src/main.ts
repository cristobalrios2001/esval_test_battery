import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración de los pipes globales para validación
  app.useGlobalPipes(
    new ValidationPipe({ 
      transform: true,  // Transformar automáticamente los datos a los tipos esperados
      transformOptions: {
        enableImplicitConversion: true,  // Convertir valores implícitamente
      },
    }),
  );

  // Definir el puerto de la aplicación
  const port = process.env.PORT ?? 3000;
  console.log(`🚀 Application is running on port: ${port}`);

  // Iniciar la aplicación
  await app.listen(port);
}

bootstrap();
