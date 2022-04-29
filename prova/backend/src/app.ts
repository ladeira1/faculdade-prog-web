import express from 'express';
import cors from 'cors';
import { MongoHelper } from './infra/database/mongo-helper';
import { provaRouter } from './presentation/route/prova.route';
import { DATABASE_URL, PORT } from '../main/config/env';

const app = express();

app.use(express.json());
app.use(cors());

MongoHelper.connect(DATABASE_URL)
  .then(async () => {
    app.get('/', (_, res) => {
      res.json({
        app: 'prova-server',
        version: '1.0.0',
      });
    });

    app.use('/api/prova', provaRouter);

    app.listen(PORT, () => {
      console.log('listening at localhost:3333');
    });
  })
  .catch(err => console.log('Error connection to database', err));
