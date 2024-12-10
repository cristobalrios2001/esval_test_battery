import { IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class MedicionDto {
  @IsString()
  idDispositivo: string;

  @Transform(({ value }) => {
    // Convierte el valor a número y luego a entero
    return Math.floor(Number(value));
  })
  nivelAgua: number;
}