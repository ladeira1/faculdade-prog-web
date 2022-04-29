import express from 'express';
import { provaController } from '../controller/prova.controller';

const provaRouter = express.Router();

provaRouter.get('/', async (_, res) => {
  const { statusCode, body } = await provaController.recuperarProvas();
  res.status(statusCode).json(body);
});

provaRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const { statusCode, body } = await provaController.recuperarProva(id);
  res.status(statusCode).json(body);
});

provaRouter.post('/', async (req, res) => {
  const { statusCode, body } = await provaController.criarProva(req);
  res.status(statusCode).json(body);
});

provaRouter.put('/', async (req, res) => {
  const { statusCode, body } = await provaController.atualizarProva(req);
  res.status(statusCode).json(body);
});

provaRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const { statusCode, body } = await provaController.deletarProva(id);
  res.status(statusCode).json(body);
});

export { provaRouter };
