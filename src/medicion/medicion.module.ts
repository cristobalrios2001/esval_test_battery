import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicionController } from './medicion.controller';
import { MedicionService } from './medicion.service';
import { Medicion } from '../medicion/entity/medicion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Medicion])],
  controllers: [MedicionController],
  providers: [MedicionService],
})
export class MedicionModule {}
