import { uuid } from 'uuidv4';

export default class Funcionario {
  id: string;

  name: string;

  sector: number;

  code: number;

  constructor({ name, sector, code }: Omit<Funcionario, 'id'>) {
    this.name = name;

    this.sector = sector;

    this.code = code;

    this.id = uuid();
  }
}
