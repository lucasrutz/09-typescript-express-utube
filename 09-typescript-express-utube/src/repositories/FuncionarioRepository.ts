import Funcionario from '../models/Funcionario';

export default class FuncionarioRepository {
  private funcionarios: Array<Funcionario>;

  constructor() {
    this.funcionarios = [];
  }

  public findAll(): Array<Funcionario> {
    return this.funcionarios;
  }

  public findByCode(code: number): Funcionario | undefined {
    return this.funcionarios.find(v => v.code === code);
  }

  public deleteByCode(code: number) {
    const index = this.funcionarios.findIndex(index => index.code === code);

    if (index === -1) {
      throw Error('Erro!');
    }

    this.funcionarios.splice(index, 1);
    return this.funcionarios;
  }

  public att(
    id: string,

    code: number,

    name: string,

    sector: number,
  ): Funcionario {
    const index = this.funcionarios.find(obj => obj.code === code);

    if (!index) {
      throw Error('Erro!');
    }

    index.code = code;
    index.name = name;
    index.sector = sector;

    return index;
  }

  public save({ code, name, sector }: Funcionario): Funcionario {
    const funcionario = new Funcionario({
      code,
      name,
      sector,
    });
    this.funcionarios.push(funcionario);
    return funcionario;
  }
}
