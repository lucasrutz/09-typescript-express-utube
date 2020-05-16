import { Router } from 'express';
import productRouter from './product.routes';
import funcionarioRouter from './funcionario.routes';

const routes = Router();

routes.use('/products', productRouter);
routes.use('/funcionarios', funcionarioRouter);

export default routes;
