import { Router } from 'express';
import FuncionarioRepository from '../repositories/FuncionarioRepository';
import CreateFuncionarioService from '../services/CreateFuncionarioService';

const funcionarioRouter = Router();
const funcionarioRepository = new FuncionarioRepository();

funcionarioRouter.get('/', (request, response) => {
  response.json(funcionarioRepository.findAll());
});

funcionarioRouter.post('/', (request, response) => {
  try {
    const service = new CreateFuncionarioService(funcionarioRepository);
    const { code, name, sector, id } = request.body;
    const funcionario = service.execute({
      code,
      name,
      sector,
      id,
    });
    response.status(201).json(funcionario);
  } catch (err) {
    return response.status(400).json({ Erro: err.message });
  }
});
funcionarioRouter.delete('/:code', (request, response) => {
  try {
    const code = parseInt(request.params.code, 10);
    return response.status(204).json(funcionarioRepository.deleteByCode(code));
  } catch (error) {
    return response.status(400).json({ Erro: 'não encontrado' });
  }
});

export default funcionarioRouter;
