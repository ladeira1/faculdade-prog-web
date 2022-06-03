import { AuthService } from '../../infra/services/auth.service';
import { HttpResponse } from '../protocols/http';
import {
  INTERNAL_SERVER_ERROR,
  OK,
  UNAUTHORIZED,
} from '../protocols/response-type';

export const authController = {
  login: async (
    username: string,
    credentials: string,
  ): Promise<HttpResponse> => {
    try {
      const user = await AuthService.authenticate(username, credentials);
      if (!user) {
        return UNAUTHORIZED('Credenciais de autenticação');
      }

      return OK(user);
    } catch (err) {
      return INTERNAL_SERVER_ERROR(err);
    }
  },
};
