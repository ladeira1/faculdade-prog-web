import { HttpResponse } from './http';

export const NOT_FOUND = (id: string = null): HttpResponse => ({
  statusCode: 404,
  body: `NOT FOUND - ${
    id
      ? `Registro com identificador ${id} não encontrado`
      : 'Registros não encontrados'
  }`,
});

export const BAD_REQUEST = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
});

export const INTERNAL_SERVER_ERROR = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: error,
});

export const OK = (body: any = null): HttpResponse => ({
  statusCode: 200,
  body: body ?? 'OK - Operação realizada com sucesso!',
});
