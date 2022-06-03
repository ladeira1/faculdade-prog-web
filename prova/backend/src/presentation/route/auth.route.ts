import express from 'express';
import { authController } from '../controller/auth.controller';

const authRouter = express.Router();

authRouter.post('/', async (req, res) => {
  const base64Credentials = req.headers.authorization.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString(
    'ascii',
  );

  const [username] = credentials.split(':');
  const httpResponse = await authController.login(username, base64Credentials);

  res.status(httpResponse.statusCode).json(httpResponse.body);
});

export { authRouter };
