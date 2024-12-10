import { Entity, PrimaryColumn, Column } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('MEDICION')
export class Medicion {
  @PrimaryColumn('uuid', { name: 'ID' })
  id: string;

  @Column('bigint', { name: 'NIVEL' })
  nivel: number;

  @Column('timestamp', { name: 'FECHA', default: () => 'CURRENT_TIMESTAMP' })
  fecha: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
