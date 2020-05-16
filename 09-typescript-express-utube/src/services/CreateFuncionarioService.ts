import FuncionarioRepository from '../repositories/FuncionarioRepository';
import Funcionario from '../models/Funcionario';

export default class CreateFuncionarioService {
  private repository: FuncionarioRepository;

  constructor(repository: FuncionarioRepository) {
    this.repository = repository;
  }

  public execute({ name, code, sector }: Funcionario): Funcionario {
    const funcionario = this.repository.findByCode(code);
    if (funcionario) {
      throw Error('Funcionario já cadastrado');
    } else {
      const p = new Funcionario({
        name,
        code,
        sector,
      });
      this.repository.save(p);
      return p;
    }
  }
}
