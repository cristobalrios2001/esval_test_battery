import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Medicion } from '../medicion/entity/medicion.entity';
import { MedicionDto } from '../medicion/dto/create-medicion.dto';

@Injectable()
export class MedicionService {
  constructor(
    @InjectRepository(Medicion)
    private medicionRepository: Repository<Medicion>,
  ) {}

  async registrarMedicion(medicionDto: MedicionDto): Promise<boolean> {
    try {
      const medicion = new Medicion();
      // Convierte el valor recibido a un entero redondeando hacia abajo
      medicion.nivel = Math.floor(Number(medicionDto.nivelAgua));
      medicion.fecha = new Date();

      await this.medicionRepository.save(medicion);
      return true;
    } catch (error) {
      console.error('Error al registrar medición:', error);
      return false;
    }
  }
}