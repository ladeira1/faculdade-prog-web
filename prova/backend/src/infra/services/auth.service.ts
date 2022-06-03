import { MongoHelper } from '../database/mongo-helper';

interface UserCredentials {
  user: string;
  credentials: string;
}

export const AuthService = {
  authenticate: async (user: string, credentials: string) => {
    try {
      const authCollection = MongoHelper.getCollection('auth');
      const userCredentials = await authCollection.findOne({
        user,
        credentials,
      });

      return MongoHelper.map(userCredentials) as UserCredentials;
    } catch {
      return null;
    }
  },
};
