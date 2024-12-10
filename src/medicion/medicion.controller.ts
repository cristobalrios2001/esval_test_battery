import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { MedicionService } from './medicion.service';
import { MedicionDto } from '../medicion/dto/create-medicion.dto';

@Controller('mediciones')
export class MedicionController {
  constructor(private medicionService: MedicionService) {}

  @Post()
  async registrarMedicion(
    @Body(new ValidationPipe({ transform: true })) medicionDto: MedicionDto,
  ): Promise<boolean> {
    return this.medicionService.registrarMedicion(medicionDto);
  }
}