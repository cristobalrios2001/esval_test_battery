import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicionModule } from './medicion/medicion.module';
import { Medicion } from './medicion/entity/medicion.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgresql://postgres.swdgjrhkwkkuijlyxcso:Esval_tk1@aws-0-sa-east-1.pooler.supabase.com:6543/postgres',
      entities: [Medicion],
      synchronize: true,
      ssl: {
        rejectUnauthorized: false
      },
      logging: true // Esto te ayudará a ver los detalles de la conexión
    }),
    MedicionModule,
  ],
})
export class AppModule {}