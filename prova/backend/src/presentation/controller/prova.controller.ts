import { MongoHelper } from '../../infra/database/mongo-helper';
import { HttpRequest } from '../protocols/http';
import {
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  OK,
} from '../protocols/response-type';

export const provaController = {
  recuperarProvas: async () => {
    try {
      const provaCollection = MongoHelper.getCollection('prova');
      const provas = await provaCollection.find().toArray();

      const result = MongoHelper.mapCollection(provas);
      return OK(result);
    } catch (err) {
      return INTERNAL_SERVER_ERROR(err);
    }
  },
  recuperarProva: async (id: string) => {
    try {
      const provaCollection = MongoHelper.getCollection('prova');
      const prova = await provaCollection.findOne({ id: Number(id) });

      if (!prova) return NOT_FOUND(id);

      const result = MongoHelper.map(prova);
      return OK(result);
    } catch (err) {
      return INTERNAL_SERVER_ERROR(err);
    }
  },
  criarProva: async (req: HttpRequest) => {
    try {
      const prova = req.body;
      const provaCollection = MongoHelper.getCollection('prova');
      const result = await provaCollection.insertOne(prova);

      if (!result) {
        return BAD_REQUEST(new Error('Não foi possível inserir o registro'));
      }

      return OK(prova);
    } catch (err) {
      return INTERNAL_SERVER_ERROR(err);
    }
  },
  atualizarProva: async (req: HttpRequest) => {
    try {
      const prova = req.body;
      const provaCollection = MongoHelper.getCollection('prova');

      let toBeUpdatedData = {};

      Object.keys(prova)
        .filter(i => i !== 'id')
        .forEach(i => {
          toBeUpdatedData = { ...toBeUpdatedData, [i]: prova[i] };
        });

      const result = await provaCollection.findOneAndUpdate(
        { id: Number(prova.id) },
        {
          $set: toBeUpdatedData,
        },
      );

      if (!result) return NOT_FOUND(prova.id);

      return OK();
    } catch (err) {
      return INTERNAL_SERVER_ERROR(err);
    }
  },
  deletarProva: async (id: string) => {
    try {
      const provaCollection = MongoHelper.getCollection('prova');
      await provaCollection.findOneAndDelete({ id: Number(id) });

      return OK();
    } catch (err) {
      return INTERNAL_SERVER_ERROR(err);
    }
  },
};
